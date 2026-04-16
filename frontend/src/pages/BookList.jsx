import React from "react";

const BookList = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <h1 className="text-3xl font-bold">Catálogo</h1>

          <div className="flex gap-3 w-full md:w-auto">
            <input
              type="text"
              placeholder="Buscar libros..."
              className="w-full md:w-64 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select className="px-4 py-2 border rounded-xl">
              <option>Todas las categorías</option>
              <option>Ficción</option>
              <option>No ficción</option>
            </select>
          </div>
        </div>
        <a href="/book/1">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          <div className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden cursor-pointer">
            <img src="cover.jpg" className="w-full h-48 object-cover" />

            <div className="p-3">
              <h2 className="font-semibold text-sm line-clamp-2">
                Título del libro
              </h2>
              <p className="text-xs text-gray-500">Autor</p>

              <div className="flex items-center justify-between mt-2 text-xs">
                <span className="text-yellow-500">★★★★☆</span>
                <span className="text-gray-400">2023</span>
              </div>

              <div className="mt-2">
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">
                  En curso
                </span>
              </div>
            </div>
          </div>
        </div>
        </a>
      </div>
    </>
  );
};

export default BookList;
