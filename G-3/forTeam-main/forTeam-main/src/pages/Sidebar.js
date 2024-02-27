import { useContext } from "react";
import { Context } from "../context/Context";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  let {
    producers,
    handleActive,
    status,
    // producer,
    sort,
    // setProducer,
    setStatus,
    setSorted,
    activeCategory1,
    activeCategory2,
    handleSetProd,
  } = useContext(Context);
  return (
    <>
      <div className="categories">
        <div className="icons">
          <NavLink to={"/tires"}>
            <button className="activeBtn">
              <box-icon
                onClick={handleActive}
                ref={activeCategory1}
                name="list-ul"
              ></box-icon>
            </button>
          </NavLink>
          <NavLink to={"/brakepads"}>
            <button className="activeBtn">
              <box-icon
                onClick={handleActive}
                ref={activeCategory2}
                name="grid"
                type="solid"
              ></box-icon>
            </button>
          </NavLink>
        </div>
        <div className="regions">
          <div className="selectReg">
            <select>
              <option value="Алматы">Алматы</option>
              <option value="Астана">Астана</option>
              <option value="Шымкент">Шымкент</option>
              <option value="Туркестан">Туркестан</option>
              <option value="Алтай">Алтай</option>
            </select>
          </div>
          <div className="checkReg">
            <input type="checkbox" />
            <p>Доставка из других регионов</p>
          </div>
        </div>
        <div className="priceBar">
          <h3>Цена</h3>
        </div>

        <div className="manufacturer">
          <h3>Производитель</h3>
          <div className="checkManufacturer">
            {producers.map((elem, i) => {
              return (
                <div className="producers" key={i}>
                  <input type="checkbox" />
                  <p
                    style={{ textTransform: "uppercase", cursor: "pointer" }}
                    onClick={() => handleSetProd(elem)}
                  >
                    {elem}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="status">
          <h3>Состояние</h3>
          {status.map((elem, i) => {
            return (
              <div className="statusCategory" key={i}>
                <input type="radio" name="status" />
                <p
                  style={{ cursor: "pointer" }}
                  onClick={() => setStatus(elem)}
                >
                  {elem ? elem : "Все"}
                </p>
              </div>
            );
          })}
        </div>
        <div className="sort">
          <h3>Сортировать</h3>
          {sort.map((item, i) => {
            return (
              <div className="sortCategories" key={i}>
                <input type="radio" name="sortRadio" />
                <p
                  onClick={() => setSorted(item)}
                  style={{ cursor: "pointer" }}
                >
                  {item}
                </p>
              </div>
            );
          })}
        </div>
        <div className="other1">
          {/* {otherCategory1.map((elem, i) => {
            return (
              <div className="sortCategories" key={i}>
                <input type="checkbox" />
                <p>{elem.other}</p>
              </div>
            );
          })} */}
        </div>
        <div className="other1">
          {/* {otherCategory2.map((elem, i) => {
            return (
              <div className="sortCategories" key={i}>
                <input type="radio" name="stockOrder" />
                <p>{elem.other}</p>
              </div>
            );
          })} */}
        </div>
        <div className="resetFilter">
          <i className="fa-solid fa-x"></i>
          <span>Сбросить фильтры</span>
        </div>
      </div>
    </>
  );
}
