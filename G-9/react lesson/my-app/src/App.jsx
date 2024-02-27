import React from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import SiteBar from "./components/SiteBar";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Choose from "./components/Choose";

export default function App() {
  return (
    <div>
      <Navbar />
      <SiteBar />
      <Header />
      <Cards />
      <Choose />
    </div>
  );
}
