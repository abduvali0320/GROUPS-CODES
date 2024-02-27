import { useContext } from "react";
import Sidebar from "./Sidebar";
import { Context } from "../context/Context";
import "boxicons";
import { NavLink } from "react-router-dom";
import LoadingPage from "./LoadingPage";

function Tires() {
  let { tiresApi, padsApi, handleShowTires } = useContext(Context);
  // handleDelTires
  return (
    <div className="tiresPage">
      <div className="leftBar">
        <Sidebar />
      </div>
      <div className="rightTires">
        <div className="middleTires">
          <div className="middleTiresTitle">
            <div className="navigate">
              <NavLink to={"/"}>Главная</NavLink>/
              <NavLink to={"/"}>Запчасти</NavLink>/
              <NavLink to={"/"}>Колодки тормозные дисковые</NavLink>
            </div>
            <div className="mainTitle">
              <h1>Колодки тормозные дисковые</h1>
            </div>
          </div>
          {tiresApi?.map((item) => {
            return (
              <div className="tiresCard" key={item?.id}>
                <div
                  className="tiresImg"
                  onClick={() => handleShowTires(item, "tires")}
                >
                  <img src={item?.img} alt={item?.title} />
                </div>
                <div className="rightSide">
                  <div className="rightTop">
                    <div className="tiresTitle-price">
                      <h3>{item?.title}</h3>
                      <h3>{item?.price}тг.</h3>
                    </div>
                    <div className="subtitle">
                      <p>{item?.subtitle}</p>
                      <p>{item?.about}</p>
                    </div>
                  </div>
                  <div className="rightBottom">
                    <div className="reg">
                      <h4>{item?.reg}</h4>
                    </div>
                    <div className="tiresDate">
                      <h4>{item?.date}</h4>
                    </div>
                    <div className="tiresViews">
                      <h4>
                        <i className="fa-regular fa-eye"></i>
                        {item?.views}
                      </h4>
                    </div>
                    <div className="cart-delete">
                      <button>
                        <box-icon name="cart-alt"></box-icon>
                      </button>
                      <button style={{ background: "none", fill: "red" }}>
                        <box-icon name="trash"></box-icon>
                      </button>
                    </div>
                      {/* onClick={() => handleDelTires(item)}  */}
                  </div>
                </div>
              </div>
            );
          })}
          <LoadingPage />
        </div>
        <div className="rightHotOffers">
          <div className="hotOffers">
            <h3>🔥Горящие предложения недели</h3>
          </div>
          {padsApi?.splice(0, 6).map((elem) => {
            return (
              <div className="padsCard" key={elem?.id}>
                <div className="leftPadsImg">
                  <img src={elem?.img} alt={elem?.title} />
                </div>
                <div className="rightPadsAbout">
                  <div className="padsTitle">
                    <h4>{elem?.title}</h4>
                  </div>
                  <div className="forCar">
                    <p>{elem?.forCar}</p>
                  </div>
                  <div className="price">
                    <h3>{elem?.price}тг.</h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tires;
