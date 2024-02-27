import { Outlet, Link, NavLink } from "react-router-dom";
import logoImg from "./logo/Слой 2.svg";
export default function Nav() {
  return (
    <>
      <nav>
        <div className="first_line_navbar content_center">
          <div className="logo">
            <i className="fa-solid fa-location-dot"></i>
            <p>Алматы</p>
          </div>

          <div className="content_in_first_line">
            <p>Бесплатная доставка заказов до конца декабря!</p>
          </div>

          <div className="ham_btn">
            <i className="fa-solid fa-bars"></i>
          </div>
        </div>

        <div className="second_line_navbar ">
          <div className="content_center">
            <Link to={"/"} className="main_logo_img_nav">
              <img src={logoImg} alt="logo" />
            </Link>
            <div className="navbar_box">
              <ul>
                <li>
                  <NavLink to={"/brakepads"}>О нас</NavLink>
                </li>
                <li>
                  <NavLink to={"/"}>Помощь</NavLink>
                </li>
                <li>
                  <NavLink to={"/seller"}>Продавцу</NavLink>
                </li>
                <li>
                  <NavLink to={"/buyer"}>Покупателю</NavLink>
                </li>
                <li>
                  <NavLink to={"/contacts"}>Контакты</NavLink>
                </li>
                {/* <li>
                  <NavLink to={"/adminform"}>Admin test Form</NavLink>
                </li> */}
              </ul>
            </div>

            <div className="input_box_in_navbar">
              <input
                type="text"
                placeholder="Введите номер детали, название или VIN"
                id="navInput"
              />

              <label htmlFor="navInput">
                <i className="fa-solid fa-clock-rotate-left fa-flip-horizontal"></i>
              </label>
              <label htmlFor="navInput">
                <box-icon name="search"></box-icon>
              </label>
            </div>

            <div className="cart_and_user_box">
              <button className="cart_and_user">
                <box-icon name="cart-alt"></box-icon>
              </button>
              <button className="cart_and_user">
                <box-icon name="user"></box-icon>
              </button>
            </div>
          </div>
        </div>

        <div className="third_line_navbar">
          <div className="content_center">
            <ul>
              <li>
                <Link to={"/catalog"}>Каталог</Link>
              </li>

              <li>
                <Link to={"/"}>
                  ТО <br />/ фильтра
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  Тормозная <br /> система
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  Двигатель <br />/ выхлоп
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  Подвеска <br />/ рулевое
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  Коробка <br /> передач
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  Электрика <br />/ освещение
                </Link>
              </li>

              <li>
                <Link to={"/"}>
                  Кузов <br />/ элементы
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
