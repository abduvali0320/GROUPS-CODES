import { NavLink, Outlet } from "react-router-dom";

export function Footer() {
  return (
    <>
      <Outlet />
      <footer className="Footer1">
        <div className="FootImg1">
          <div className="graph">
            <img src="./IMGS/Group.png" alt="img" />
          </div>
          <img src="./IMGS/Transmission.png" alt="img" className="FootImg1" />
        </div>
        <div className="FootImg2">
          <div className="graph">
            <img src="./IMGS/graph2.png" alt="img" />
          </div>
          <img src="./IMGS/wheel 1.png" alt="img" className="FootImg2" />
        </div>

        <div className="FootTexts">
          <div className="FootSarlavha">
            <h1 className="FootText">
              Начните продавать <br /> на EZY Parts!
            </h1>
          </div>
          <div className="FootButton">
            <button>СТАТЬ ПРОДАВЦОМ</button>
          </div>
        </div>
        <div className="FootPart">
          <img src="./IMGS/banner.png" alt="img" />
        </div>
        <div className="FootConnect">
          <div className="BackgroundOfConnect">
            <div className="FootPart1">
              <div className="FootLinks">
                <NavLink to={"/"}>Каталог автозапчастей</NavLink>
                <NavLink to={"/brakepads"}>О компании</NavLink>
                <NavLink to={"/tires"}>Помощь</NavLink>
                <NavLink to={"/buyer"}>Покупателю</NavLink>
              </div>
              <div className="FootLinks2">
                <NavLink to={"/seller"}>Продавцу</NavLink>
                <NavLink to={"/"}>Реклама на сайте</NavLink>
                <NavLink to={"/contacts"}>Контакты</NavLink>
              </div>
            </div>

            <div className="FootPart1">
              <div className="FootSocial">
                <i className="fa-brands fa-vk"></i>
                <i className="fa-brands fa-square-facebook"></i>
                <i className="fa-brands fa-square-instagram"></i>
              </div>

              <div className="ConnectImg">
                <img src="./IMGS/Layer 1.png" alt="" />
                <p>© 2021, EZY parts</p>
              </div>
            </div>
          </div>
        </div>
        <div className="FootEnd">
          <p>
            Используя ezyparts.kz, вы принимаете условия использования сайта
          </p>
          <p>Разработка: busnesscenter.kz</p>
        </div>
      </footer>
    </>
  );
}
