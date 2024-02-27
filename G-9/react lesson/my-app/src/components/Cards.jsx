import React from "react";
import car1 from "../img/car1.png";
import car2 from "../img/car2.png";
import car3 from "../img/car3.png";
import xitoy from "../img/xitoy.png";
import yapon from "../img/yapon.png";
import korea from "../img/korea.png";
export default function Cards() {
  let cars_type = [
    {
      id: 1,
      country: "Японии",
      country_rasm: yapon,
      car_img: car3,
    },
    {
      id: 2,
      country: "Китая",
      country_rasm: xitoy,
      car_img: car2,
    },
    {
      id: 3,
      country: "Кореи",
      country_rasm: korea,
      car_img: car1,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="cards">
          {cars_type.map((item) => (
            <div className="card" key={item.id}>
              <div className="flex_element">
                <div>
                  <p>Автомобили</p>
                  <h1>из {item.country} </h1>
                </div>
                <figure>
                  <img src={item.country_rasm} alt="yapon bayrog'i" />
                </figure>
              </div>
              <figure>
                <img src={item.car_img} alt="avtomobil" />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
