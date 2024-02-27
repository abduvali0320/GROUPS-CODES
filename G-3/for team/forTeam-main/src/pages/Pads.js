import "boxicons";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Context";
import LoadingPage from "./LoadingPage";
import Sidebar from "./Sidebar";

export default function Pads() {
  let { padsApi, handleShowTires} = useContext(Context);
  return (
    <div className="BrakePads categoryPage">
      <div className="leftBar">
        <Sidebar />
      </div>
      <div className="rightBrakes">
        <div className="topText">
          <div className="title-navigate">
            <div className="navigate">
              <NavLink to={"/"}>Главная</NavLink>/
              <NavLink to={"/"}>Запчасти</NavLink>/
              <NavLink to={"/"}>Колодки тормозные дисковые</NavLink>
            </div>
            <div className="mainTitle">
              <h1>Колодки тормозные дисковые</h1>
            </div>
          </div>
          <div className="hotProducts">
            <h3>🔥Горящие предложения недели</h3>
          </div>
        </div>
        <LoadingPage />
        <div className="hotOffers">
          {padsApi.slice(0, 4).map((elem, i) => {
            return (
              <div className="hotCard" key={elem.id}>
                <div className="title-padsImg">
                  <div
                    className="padsImg"
                    onClick={() => handleShowTires(elem, "brakepads")}
                  >
                    <img src={elem?.img} alt="brake pads" />
                  </div>
                  <div className="padsTitle">
                    <h3>{elem?.title}</h3>
                  </div>
                </div>
                <div className="forCar">
                  <p>{elem?.forCar}</p>
                </div>
                <div className="price-cart">
                  <div className="price">
                    <h2>{elem?.price}</h2>
                  </div>
                  <div className="cart-delete">
                    <button>
                      <box-icon name="cart-alt"></box-icon>
                    </button>
                  </div>
                </div>
                <div className="prod">
                  Producer:
                  <span style={{ ...textStyle }}>{elem?.producer}</span>
                </div>
              </div>
            );
          })}
        </div>
        <hr />
        <div className="brakeCards">
          {padsApi.slice(4).map((elem, i) => {
            return (
              <div className="brakeCard" key={i}>
                <div className="title-padsImg">
                  <div
                    className="padsImg"
                    onClick={() => handleShowTires(elem, "brakepads")}
                  >
                    <img src={elem?.img} alt="brake pads" />
                  </div>
                  <div className="padsTitle">
                    <h3>{elem?.title}</h3>
                  </div>
                </div>
                <div className="forCar">
                  <p>{elem?.forCar}</p>
                </div>
                <div className="price-cart">
                  <div className="price">
                    <h2>{elem?.price}</h2>
                  </div>
                  <div className="cart-delete">
                    <button>
                      <box-icon name="cart-alt"></box-icon>
                    </button>
                  </div>
                </div>
                <div className="producer">
                  Producer:
                  <span style={{ ...textStyle }}>{elem?.producer}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
let textStyle = {
  textTransform: "uppercase",
  marginLeft: "10px",
};
