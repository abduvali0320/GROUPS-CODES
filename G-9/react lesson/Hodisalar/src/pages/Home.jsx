import React from "react";
import HomeSlider from "../components/HomeSlider";

export default function Home() {
    return (
        <header className="bg-gray-light">
            <div className="container-fluid continer">
                <div className="slider-container">
                    <HomeSlider />
                </div>
            </div>
        </header>
    );
}
