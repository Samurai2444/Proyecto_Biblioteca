import React from "react";

const LibraryPage = () => {
  return (
    <>
      <div class="min-h-screen bg-gray-100 flex">
        <aside class="w-64 bg-white shadow-lg p-5">
          <h2 class="text-xl font-bold mb-8">📚 Biblioteca</h2>

          <nav class="space-y-2 text-sm">
            <div class="px-3 py-2 rounded-lg bg-gray-100 font-medium">
              Panel
            </div>

            <div class="px-3 py-2 rounded-lg text-gray-600">Ejemplares</div>

            <div class="px-3 py-2 rounded-lg text-gray-600">Préstamos</div>

            <div class="px-3 py-2 rounded-lg text-gray-600">Historial</div>
          </nav>
        </aside>

        <main class="flex-1 p-6">
          <div class="flex justify-between items-center mb-6">
            <h1 class="text-2xl font-bold">Gestión de biblioteca</h1>

            <div class="text-sm text-gray-500">Bibliotecario</div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Ejemplares</p>
              <p class="text-2xl font-bold">120</p>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Disponibles</p>
              <p class="text-2xl font-bold text-green-600">88</p>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Prestados</p>
              <p class="text-2xl font-bold text-yellow-600">28</p>
            </div>

            <div class="bg-white p-4 rounded-2xl shadow">
              <p class="text-sm text-gray-500">Retrasos</p>
              <p class="text-2xl font-bold text-red-500">4</p>
            </div>
          </div>

          <div class="bg-white rounded-2xl shadow overflow-hidden mb-8">
            <div class="p-4 border-b flex justify-between items-center">
              <h2 class="font-semibold">Préstamos activos</h2>
            </div>

            <table class="w-full text-sm">
              <thead class="bg-gray-50 text-left">
                <tr>
                  <th class="p-3">Libro</th>
                  <th class="p-3">Ejemplar</th>
                  <th class="p-3">Usuario</th>
                  <th class="p-3">Fecha préstamo</th>
                  <th class="p-3">Estado</th>
                </tr>
              </thead>

              <tbody>
                <tr class="border-t">
                  <td class="p-3">Libro X</td>
                  <td class="p-3">#A-102</td>
                  <td class="p-3">user123</td>
                  <td class="p-3">01/04/2026</td>
                  <td class="p-3 text-yellow-600">Prestado</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div class="bg-white rounded-2xl shadow p-4">
            <div class="flex justify-between items-center mb-4">
              <h2 class="font-semibold">Ejemplares disponibles</h2>
            </div>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="p-3 bg-gray-50 rounded-xl">
                <p class="font-medium">Libro X</p>
                <p class="text-sm text-gray-500">#A-101</p>
                <p class="text-xs text-green-600 mt-1">Disponible</p>
              </div>

              <div class="p-3 bg-gray-50 rounded-xl">
                <p class="font-medium">Libro Y</p>
                <p class="text-sm text-gray-500">#B-204</p>
                <p class="text-xs text-yellow-600 mt-1">Prestado</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default LibraryPage;
