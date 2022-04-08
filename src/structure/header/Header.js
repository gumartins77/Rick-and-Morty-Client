import React from "react";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
    return (
        <header className="header">
            <Link to="/view">
                <img src="/assets/logo-blue-croped.gif" alt="Blue Edtech" width = "15%" height = "auto"/>
            </Link>
            <nav>
                <Link to="/view">Listar</Link>
                <Link to="/add">Adicionar</Link>
            </nav>
        </header>
    );
}
