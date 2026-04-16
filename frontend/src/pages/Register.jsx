import React from "react";

const Register = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Crear cuenta</h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nombre</label>
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Confirmar contraseña
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-start gap-2 text-sm">
              <input type="checkbox" className="mt-1" />
              <p>
                Acepto los{" "}
                <a href="#" className="text-blue-500 hover:underline">
                  términos y condiciones
                </a>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Registrarse
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-500">
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Inicia sesión
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
