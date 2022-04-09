import React from "react";
import { useNavigate,Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
    const navigate = useNavigate();
    const logout = ()=>{
        localStorage.removeItem('keyLogin');
        navigate('/');
    }
    return (
        <header className="header">
            <Link to="/view">
                <img src="/assets/logo-blue-croped.gif" alt="Blue Edtech" width = "15%" height = "auto"/>
            </Link>
            <nav>
                <Link to="/view">Listar</Link>
                <Link to="/add">Adicionar</Link>
                <label className="link" onClick={logout}>Sair</label>
            </nav>
        </header>
    );
}
