import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "./Home";
import ContactUs from "./ContactUs";
import Service from "./Service";
import About from "./About";
import About_child from "../components/About_child";
import SingleUser from "./SingleUser";
import Product from "./Product";

export default function Pages() {
    return (
        <>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />}>
                        <Route path="about_child" element={<About_child />} />
                    </Route>
                    <Route path="/service" element={<Service />} />
                    <Route path="/service/:nomi" element={<SingleUser />} />
                    <Route path="/contact" element={<ContactUs />} />
                    <Route path="/products" element={<Product />} />
                </Route>
            </Routes>
        </>
    );
}
