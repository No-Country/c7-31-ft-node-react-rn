import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ActividadPublicada from "../components/VistaActividadPublicada/ActividadPublicada";
import { VistaContrasenaCambiada } from "../components/VistaContrasenaCambiada/VistaContrasenaCambiada";
import MiCuenta from "../components/VistaMiCuenta/MiCuenta";
import VerGrupos from "../components/VistaVerGrupos/VerGrupos";
import Home from "../pages/Home";
import Organizador from "../pages/Organizador";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/verGrupos" element={<VerGrupos />} />
                <Route exact path="/miCuenta" element={<MiCuenta />} />
                <Route exact path="/Organizador" element={<Organizador />} />

                <Route
                    exact
                    path="/miCuenta/contrasenaCambiada"
                    element={<VistaContrasenaCambiada />}
                />

                <Route
                    path="/actividadPublicada"
                    element={<ActividadPublicada />}
                />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default AppRouter;
