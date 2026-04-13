import React from "react";

const User = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
            <div>
              <h1 className="text-2xl font-bold">Usuario123</h1>
              <p className="text-sm text-gray-500">Miembro desde 2024</p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Libros</p>
              <p className="text-xl font-bold">12</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Leídos</p>
              <p className="text-xl font-bold">8</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Reseñas</p>
              <p className="text-xl font-bold">30</p>
            </div>
            <div className="bg-white p-4 rounded-xl shadow">
              <p className="text-sm text-gray-500">Favoritos</p>
              <p className="text-xl font-bold">15</p>
            </div>
          </div>

          <h2 className="text-xl font-semibold mb-4">Mi Lectura</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-4 shadow">
              <h2 className="font-semibold mb-4">Pendiente</h2>
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-xl shadow-sm">
                  <p className="font-medium">Nombre del libro</p>
                  <p className="text-sm text-gray-500">Autor</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow">
              <h2 className="font-semibold mb-4">En curso</h2>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-xl shadow-sm">
                  <p className="font-medium">Libro en progreso</p>
                  <p className="text-sm text-gray-500">Autor</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow">
              <h2 className="font-semibold mb-4">Leído</h2>
              <div className="space-y-3">
                <div className="bg-green-50 p-3 rounded-xl shadow-sm">
                  <p className="font-medium">Libro leído</p>
                  <p className="text-sm text-gray-500">Autor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
