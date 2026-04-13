import React from "react";

const Footer = () => {
  return (
    <>
        <footer class="bg-white border-t mt-10">
          <div class="max-w-7xl mx-auto px-6 py-6">
            <div class="flex flex-col md:flex-row justify-between gap-6">
              <div>
                <h2 class="text-lg font-bold">📚 BibliotecApp</h2>
                <p class="text-sm text-gray-500 mt-2">
                  Gestiona tu biblioteca personal y descubre nuevos libros.
                </p>
              </div>

              <div class="flex gap-10 text-sm">
                <div>
                  <p class="font-semibold mb-2">App</p>
                  <ul class="space-y-1 text-gray-600">
                    <li>
                      <a href="/book" class="hover:text-black">
                        Catálogo
                      </a>
                    </li>
                    <li>
                      <a href="/user" class="hover:text-black">
                        Mi biblioteca
                      </a>
                    </li>
                    <li>
                      <a href="/lectura" class="hover:text-black">
                        Lectura
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <p class="font-semibold mb-2">Cuenta</p>
                  <ul class="space-y-1 text-gray-600">
                    <li>
                      <a href="/perfil" class="hover:text-black">
                        Perfil
                      </a>
                    </li>
                    <li>
                      <a href="/login" class="hover:text-black">
                        Login
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="border-t mt-6 pt-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between">
              <p>© 2026 BookApp</p>
              <div class="flex gap-4">
                <a href="#" class="hover:text-black">
                  Privacidad
                </a>
                <a href="#" class="hover:text-black">
                  Términos
                </a>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
};

export default Footer;
