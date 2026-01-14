import React from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom/client";

import "./css/index.css";
import Home from "./pages/Home.tsx";
import WhoAreWe from "./pages/WhoAreWe.tsx";
import Projects from "./pages/Projects.tsx";
import Services from "./pages/Services.tsx";
import Career from "./pages/Career.tsx";
import Navigation from "./components/Navigation.tsx";
import { HeroUIProvider } from "@heroui/react";
import Footer from "./components/Footer.tsx";


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <BrowserRouter>
            <MainContentRenderer />
        </BrowserRouter>
    </React.StrictMode>
);

export function MainContentRenderer() {
    const navigate = useNavigate();
    const location = useLocation();
    const isNavDark = location.pathname !== "/";
    return (
        <HeroUIProvider navigate={navigate}>
            <Navigation isNavDark={isNavDark} />
            <Routes>
                <Route>
                    <Route path="/" element={<Home />} />
                    <Route path="/who-are-we" element={<WhoAreWe />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/career" element={<Career />} />
                </Route>
            </Routes>
            <Footer />
        </HeroUIProvider>
    );
}
