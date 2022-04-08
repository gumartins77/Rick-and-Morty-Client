import React from "react";
import { BrowserRouter } from "react-router-dom";
import Footer from '../footer/Footer';
import './App.css';
import PageRoutes from "../../routes/PageRoutes";
import MenuRoutes from "../../routes/MenuRoutes";

export function App() {
    return (
        <div className="app">
            <BrowserRouter>
                <MenuRoutes />
                <PageRoutes />
            </BrowserRouter>
            <Footer />
        </div>
    );
}
