import React, { useContext } from 'react';
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";
import Header from "../components/Header.jsx";
import { Navigate, useLocation } from "react-router-dom";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    // Si NO está logueado y está intentando acceder a otra página que no sea "/", redirigimos al login
    if (!user.isLogged && location.pathname !== "/") {
        return <Navigate to="/" replace />;
    }

    // Si NO está logueado, no se muestra el navbar, solo el contenido (login)
    if (!user.isLogged) {
        return <Outlet />;
    }

    // Si está logueado, mostramos el navbar completo
    return (
        <div>
            <header>
                <Header title="Prueba para los test" />
                <nav style={{ marginTop: "30px" }}>
                    <NavLink style={{ marginRight: "10px" }} to="/home">Home</NavLink>
                    <button className="button" onClick={logout}>Cerrar sesión</button>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default Navbar;
