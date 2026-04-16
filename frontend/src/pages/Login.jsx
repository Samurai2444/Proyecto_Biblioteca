import React from "react";
import AuthContext from "../context/AuthContext";

const Login = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Iniciar sesión</h1>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="tu@email.com"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Contraseña</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="rounded" />
                Recordarme
              </label>

              <a href="#" className="text-blue-500 hover:underline">
                ¿Olvidaste la contraseña?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition"
            >
              Entrar
            </button>
          </form>

          <p className="text-sm text-center mt-6 text-gray-500">
            ¿No tienes cuenta?
            <a href="/register" className="text-blue-500 hover:underline">
              Regístrate
            </a>
          </p>
        </div>
      </div>
    </>
  );
};


export default Login;
