import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from '../structure/header/Header';

export default function MenuRoutes(){
    return (
        <Routes>
            <Route path="/login" exact={true} element={<></>} />
            <Route path="/" exact={true} element={<Header/>} />

        </Routes>
    );
}