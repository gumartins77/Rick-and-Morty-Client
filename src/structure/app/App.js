import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from '../header/Header';
import Footer from '../footer/Footer';
import PageRoutes from "../../routes/PageRoutes";
import './App.css';

export function App() {
    return (
        <div className="app">
            <Header />
            <BrowserRouter>
                <PageRoutes />
            </BrowserRouter>
            <Footer />
        </div>
    );
}
