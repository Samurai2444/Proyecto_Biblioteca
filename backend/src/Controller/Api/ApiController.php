<?php

declare(strict_types=1);

namespace App\Controller\Api;

use App\Repository\BookCommentRepository;
use App\Repository\BookRatingRepository;
use App\Repository\BookRepository;
use App\Repository\BookReviewRepository;
use App\Repository\CategoryRepository;
use App\Repository\LoanRepository;
use App\Repository\TagRepository;
use Doctrine\DBAL\Connection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Attribute\Route;

final class ApiController extends AbstractController
{
    #[Route('/health/db', name: 'api_health_db', methods: ['GET'])]
    public function healthDb(Connection $connection): JsonResponse
    {
        try {
            $connection->executeQuery('SELECT 1')->fetchOne();

            return $this->json(['ok' => true]);
        } catch (\Throwable $e) {
            return $this->json(['ok' => false, 'error' => $e->getMessage()], JsonResponse::HTTP_SERVICE_UNAVAILABLE);
        }
    }

    #[Route('/categorias', name: 'api_categorias', methods: ['GET'])]
    public function categorias(CategoryRepository $categories): JsonResponse
    {
        $rows = array_map(static fn ($c) => ['id' => $c->getId(), 'nombre' => $c->getNombre()], $categories->findAllOrdered());

        return $this->json(['categorias' => $rows]);
    }

    #[Route('/etiquetas', name: 'api_etiquetas', methods: ['GET'])]
    public function etiquetas(TagRepository $tags): JsonResponse
    {
        $rows = array_map(static fn ($t) => ['id' => $t->getId(), 'nombre' => $t->getNombre()], $tags->findAllOrdered());

        return $this->json(['etiquetas' => $rows]);
    }

    #[Route('/libros', name: 'api_libros', methods: ['GET'])]
    public function libros(BookRepository $books, BookRatingRepository $ratings): JsonResponse
    {
        $list = $books->findPublishedForCatalog();
        $ids = array_map(static fn ($b) => $b->getId(), $list);
        $stats = $ratings->averageStatsByBookIds(array_filter($ids));

        $libros = [];
        foreach ($list as $b) {
            $disponibles = 0;
            foreach ($b->getCopies() as $copy) {
                if ($copy->getEstado() === 'disponible') {
                    ++$disponibles;
                }
            }
            $id = $b->getId();
            $st = $id !== null ? ($stats[$id] ?? null) : null;
            $libros[] = [
                'id' => $id,
                'titulo' => $b->getTitulo(),
                'autor' => $b->getAutor(),
                'isbn' => $b->getIsbn(),
                'anioPublicacion' => $b->getAnioPublicacion(),
                'descripcion' => $b->getDescripcion(),
                'categoria' => $b->getCategory() ? ['id' => $b->getCategory()->getId(), 'nombre' => $b->getCategory()->getNombre()] : null,
                'propietarioId' => $b->getOwner()?->getId(),
                'etiquetas' => $b->getTags()->map(static fn ($t) => ['id' => $t->getId(), 'nombre' => $t->getNombre()])->getValues(),
                'valoracionMedia' => $st['media'] ?? null,
                'valoracionCantidad' => $st['total'] ?? 0,
                'ejemplaresDisponibles' => $disponibles,
                'ejemplaresTotal' => $b->getCopies()->count(),
            ];
        }

        return $this->json(['libros' => $libros]);
    }

    #[Route('/libros/{id}/resenas', name: 'api_libro_resenas', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function libroResenas(int $id, BookRepository $books, BookReviewRepository $reviews): JsonResponse
    {
        if (!$books->findOnePublished($id)) {
            return $this->json(['error' => 'Libro no encontrado'], JsonResponse::HTTP_NOT_FOUND);
        }
        $rows = [];
        foreach ($reviews->findByBookOrdered($id) as $r) {
            $u = $r->getUser();
            $rows[] = [
                'id' => $r->getId(),
                'titulo' => $r->getTitulo(),
                'cuerpo' => $r->getCuerpo(),
                'creadoEn' => $r->getCreadoEn()?->format(\DateTimeInterface::ATOM),
                'autor' => $u ? ['id' => $u->getId(), 'nombre' => $u->getNombre()] : null,
            ];
        }

        return $this->json(['resenas' => $rows]);
    }

    #[Route('/libros/{id}/comentarios', name: 'api_libro_comentarios', requirements: ['id' => '\d+'], methods: ['GET'])]
    public function libroComentarios(int $id, BookRepository $books, BookCommentRepository $comments): JsonResponse
    {
        if (!$books->findOnePublished($id)) {
            return $this->json(['error' => 'Libro no encontrado'], JsonResponse::HTTP_NOT_FOUND);
        }
        $rows = [];
        foreach ($comments->findRootCommentsByBook($id) as $c) {
            $u = $c->getUser();
            $replies = [];
            foreach ($c->getReplies() as $rep) {
                $ru = $rep->getUser();
                $replies[] = [
                    'id' => $rep->getId(),
                    'contenido' => $rep->getContenido(),
                    'creadoEn' => $rep->getCreadoEn()?->format(\DateTimeInterface::ATOM),
                    'autor' => $ru ? ['id' => $ru->getId(), 'nombre' => $ru->getNombre()] : null,
                ];
            }
            $rows[] = [
                'id' => $c->getId(),
                'contenido' => $c->getContenido(),
                'creadoEn' => $c->getCreadoEn()?->format(\DateTimeInterface::ATOM),
                'autor' => $u ? ['id' => $u->getId(), 'nombre' => $u->getNombre()] : null,
                'respuestas' => $replies,
            ];
        }

        return $this->json(['comentarios' => $rows]);
    }

    #[Route('/prestamos/activos', name: 'api_prestamos_activos', methods: ['GET'])]
    public function prestamosActivos(LoanRepository $loans): JsonResponse
    {
        $rows = [];
        foreach ($loans->findActivos() as $p) {
            $e = $p->getBookCopy();
            $book = $e?->getBook();
            $u = $p->getUser();
            $rows[] = [
                'id' => $p->getId(),
                'ejemplarCodigo' => $e?->getCodigo(),
                'libroTitulo' => $book?->getTitulo(),
                'usuario' => $u ? ['id' => $u->getId(), 'nombre' => $u->getNombre()] : null,
                'fechaPrestamo' => $p->getFechaPrestamo()?->format('Y-m-d'),
                'fechaDevolucionPrevista' => $p->getFechaDevolucionPrevista()?->format('Y-m-d'),
            ];
        }

        return $this->json(['prestamos' => $rows]);
    }
}
