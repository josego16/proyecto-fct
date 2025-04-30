import React from "react";
import "./css/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/NavBar.jsx";
import Login from "./components/auth/Login.jsx";
import ProtectedRoute from "./components/auth/ProtectedRoute.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import AdminPanel from "./components/admin/AdminPanel.jsx";
import { AuthProvider } from "./context/AuthContext";

function App() {
  const router = createBrowserRouter([
    // Ruta pública: login
    { path: "/", element: <Login /> },

    // Rutas protegidas: con Navbar
    {
      element: <ProtectedRoute />, // Verifica si el usuario está logueado
      children: [
        {
          element: <Navbar />, // Si está logueado, muestra navbar + subrutas
          children: [
            { path: "/home", element: <Home /> },
            { path: "/admin", element: <ProtectedRoute redirectTo="/home" />, // Protege la ruta del panel de administrador
              children: [
                { path: "/admin", element: <AdminPanel /> },
              ]
            },
            { path: "*", element: <NotFound /> },
          ],
        },
      ],
    },
  ]);

  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
