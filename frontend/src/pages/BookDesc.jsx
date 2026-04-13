import React from "react";

const BookDesc = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex flex-col md:flex-row gap-8">
            <img
              src="cover.jpg"
              className="w-48 h-72 object-cover rounded-2xl shadow"
            />

            <div className="flex-1">
              <h1 className="text-3xl font-bold">Título del libro</h1>
              <p className="text-gray-500 mt-1">Autor · 2023</p>

              <div className="flex items-center gap-2 mt-3">
                <span className="text-yellow-500 text-lg">★★★★☆</span>
                <span className="text-sm text-gray-500">(128 valoraciones)</span>
              </div>

              <div className="flex gap-2 mt-4 flex-wrap">
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  Fantasía
                </span>
                <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                  Aventura
                </span>
              </div>

              <div className="flex flex-wrap gap-3 mt-6">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-xl">
                  Añadir a mi biblioteca
                </button>

                <select className="border px-3 py-2 rounded-xl">
                  <option>Pendiente</option>
                  <option>En curso</option>
                  <option>Leído</option>
                </select>

                <button className="border px-4 py-2 rounded-xl">⭐ Valorar</button>
                <button className="border px-4 py-2 rounded-xl">❤ Favorito</button>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg mb-2">Descripción</h2>
            <p className="text-gray-700 text-sm leading-relaxed">
              Aquí iría la descripción del libro. Puede ser larga, así que está
              preparada para texto extendido.
            </p>
          </div>

          <div className="mt-8">
            <div className="flex gap-6 border-b pb-2 text-sm">
              <button className="font-medium border-b-2 border-blue-500 pb-1">
                Reseñas
              </button>
              <button className="text-gray-500">Comentarios</button>
            </div>

            <div className="mt-6 space-y-6">
              <div className="bg-white p-5 rounded-2xl shadow">
                <div className="flex justify-between items-center">
                  <h3 className="font-semibold">Gran libro</h3>
                  <span className="text-yellow-500 text-sm">★★★★☆</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Texto de la reseña del usuario...
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow">
                <h3 className="font-semibold">Interesante pero lento</h3>
                <p className="text-sm text-gray-600 mt-2">Otra reseña...</p>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-semibold mb-4">Comentarios</h2>

            <div className="bg-white p-4 rounded-xl shadow mb-6">
              <textarea
                placeholder="Escribe un comentario..."
                className="w-full border rounded-lg p-2 text-sm"
              ></textarea>
              <div className="flex justify-end mt-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm">
                  Publicar
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl shadow">
                <p className="text-sm text-gray-700">Comentario principal</p>

                <div className="ml-6 mt-3 border-l pl-4">
                  <p className="text-sm text-gray-600">Respuesta a comentario</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookDesc;
