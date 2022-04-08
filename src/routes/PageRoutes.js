import React from "react";
import { Routes, Route } from "react-router-dom";
import { ReadAll } from "../components/read-all/ReadAll";
import { ReadById } from "../components/read-by-id/ReadById";
import { Create } from "../components/create/Create";
import { Update } from "../components/update/Update";
import { Delete } from "../components/delete/Delete";

export default function PageRoutes(){
    return (
        <Routes>
            <Route path="/" exact={true} element={<ReadAll/>} />

            <Route path="/view/:id" element={<ReadById/>} />

            <Route path="/add" element={<Create/>} />

            <Route path="/update/:id" element={<Update/>} />

            <Route path="/delete/:id" element={<Delete/>} />
        </Routes>
    );
}