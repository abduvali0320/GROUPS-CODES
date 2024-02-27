import React from "react";
import cars from "../img/Group 4238.png";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="flex_column">
          <h1>Автомобили из Японии, Южной Кореи и Китая под заказ</h1>
          <p>
            Подберем, купим и доставим любой автомобиль из Японии, Южной Кореи и
            Китая. Растаможим. Организуем доставку по России.
          </p>
          <button className="auksion_btn">
            <i className="fa-solid fa-magnifying-glass"></i>
            ПОДОБРАТЬ АВТО
          </button>
        </div>
        <figure>
          <img src={cars} alt="" />
        </figure>
      </div>
    </header>
  );
}
