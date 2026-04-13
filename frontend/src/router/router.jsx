import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import BookList from "../pages/BookList";
import BookDesc from "../pages/BookDesc";
import User from "../pages/User";
import AdminPage from "../pages/AdminPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import LibraryPage from "../pages/LibraryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "login",
        index: true,
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "book",
        element: <BookList />,
      },
      {
        path: "book/:id",
        element: <BookDesc />,
      },
      {
        path: "admin",
        element: (
          // <ProtectedRoute requiredAdmin="admin">
          <AdminPage />
          //</ProtectedRoute>
        ),
      },
      {
        path: "user", ///:id
        element: (
          // <ProtectedRoute>
          <User />
          //</ProtectedRoute>
        ),
      },
      {
        path: "library",
        element: (
          // <ProtectedRoute>
          <LibraryPage />
          //</ProtectedRoute>
        ),
      },
    ],
  },
]);
