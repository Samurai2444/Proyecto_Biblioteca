import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <h1 className="text-xl font-bold cursor-pointer">📚 BibliotecApp</h1>

            <nav className="hidden md:flex gap-4 text-sm">
              <a href="/book" className="text-gray-600 hover:text-black">
                Catálogo
              </a>
              <a href="/user" className="text-gray-600 hover:text-black">
                Mi biblioteca
              </a>
              <a href="/lectura" className="text-gray-600 hover:text-black">
                Lectura
              </a>
            </nav>
          </div>

          <div className="hidden md:block">
            <input
              type="text"
              placeholder="Buscar libros..."
              className="px-4 py-2 border rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <a
              href="/admin"
              className="hidden md:block text-sm text-gray-600 hover:text-black"
            >
              Admin
            </a>
            <a
              href="/library"
              className="hidden md:block text-sm text-gray-600 hover:text-black"
            >
              Bibliotecario
            </a>

            <div className="w-8 h-8 bg-gray-300 rounded-full cursor-pointer"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
