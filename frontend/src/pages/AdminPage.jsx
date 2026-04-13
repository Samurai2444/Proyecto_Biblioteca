import React from "react";

const AdminPage = () => {
  return (
    <>
      <div class="min-h-screen bg-gray-100 flex">
        <aside class="w-64 bg-white shadow-lg p-5">
          <h2 class="text-xl font-bold mb-8">📚 Admin</h2>

          <nav class="space-y-2 text-sm">
            <a
              href="/admin"
              class="block px-3 py-2 rounded-lg bg-gray-100 font-medium"
            >
              Dashboard
            </a>
            <a
              href="/admin/books"
              class="block px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Libros
            </a>
            <a
              href="/admin/users"
              class="block px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Usuarios
            </a>
            <a
              href="/admin/reports"
              class="block px-3 py-2 rounded-lg hover:bg-gray-100"
            >
              Reportes
            </a>
          </nav>
        </aside>

        <main class="flex-1 p-6">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Dashboard</h1>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Libros</p>
              <p class="text-2xl font-bold">120</p>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Usuarios</p>
              <p class="text-2xl font-bold">80</p>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Reseñas</p>
              <p class="text-2xl font-bold">340</p>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Reportes</p>
              <p class="text-2xl font-bold text-red-500">12</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow mb-8 overflow-hidden">
            <div class="p-4 border-b flex justify-between items-center">
              <h2 class="font-semibold">Libros pendientes</h2>
              <a href="/admin/books" class="text-sm text-blue-500">
                Ver todos
              </a>
            </div>

            <table class="w-full text-sm">
              <thead class="bg-gray-50 text-left">
                <tr>
                  <th class="p-3">Título</th>
                  <th class="p-3">Autor</th>
                  <th class="p-3">Usuario</th>
                  <th class="p-3">Estado</th>
                  <th class="p-3">Acciones</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t">
                  <td class="p-3">Libro X</td>
                  <td class="p-3">Autor Y</td>
                  <td class="p-3">User123</td>
                  <td class="p-3 text-yellow-600">Pendiente</td>
                  <td class="p-3 flex gap-3">
                    <button class="text-green-600 hover:underline">
                      Aprobar
                    </button>
                    <button class="text-red-600 hover:underline">
                      Rechazar
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white rounded-2xl shadow p-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="font-semibold">Reportes recientes</h2>
              <a href="/admin/reports" class="text-sm text-blue-500">
                Ver todos
              </a>
            </div>

            <div class="space-y-3">
              <div class="p-3 bg-gray-50 rounded-lg flex justify-between items-center">
                <div>
                  <p class="text-sm">Comentario inapropiado</p>
                  <p class="text-xs text-gray-500">Estado: pendiente</p>
                </div>
                <button class="text-blue-500 text-sm">Revisar</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AdminPage;
