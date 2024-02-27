import React from "react";

export default function Home() {
  return (
    <div>
      <div className="katak">
        <img src="./IMGS/Vector 11.png" alt="imgs" />
        <div className="detalL">
          <h1>подобрать детали</h1>
          <p>
            найдите недостающие детали именно на ваше транспортное стредство
          </p>
          <form>
            <div className="inpP">
              <input type="text" placeholder="Год выпуска" />
              <input type="text" placeholder="Марка" />
              <input type="text" placeholder="Модель" />
              <input type="text" placeholder="Тип кузова" />
            </div>
            <button className="nayti">НАЙТИ ДЕТАЛИ</button>
          </form>
        </div>
      </div>
      <div className="cardS">
        <div className="cardD">
          <i className="fa-solid fa-table-list"></i>
          <p>Выбирайте по цене, скорости доставки или расположению</p>
        </div>
        <div className="cardD">
          <i className="fa-solid fa-trash"></i>
          <b>589 837 </b>
          <p>запчастей и масел в каталоге</p>
        </div>
        <div className="cardD">
          <i className="fa-solid fa-users"></i>
          <p>Средний рейтинг продавцов </p>
          <b>4.83 из 5</b>
        </div>
        <div className="cardD kichik">
          <i className="fa-solid fa-circle-plus"></i>
          <p>Подать объявление</p>
        </div>
      </div>
      <div className="cardSS">
        <div className="cardN">
          <img src="./IMGS/img.png" alt="" />
          <h3>12 500 тг</h3>
          <p>12 500 тг RENAULT Корпус фильтра масляного (с радиатором)</p>
        </div>
        <div className="cardN">
          <img src="./IMGS/img.png" alt="" />
          <h3>12 500 тг</h3>
          <p>12 500 тг RENAULT Корпус фильтра масляного (с радиатором)</p>
        </div>
        <div className="cardN">
          <img src="./IMGS/img.png" alt="" />
          <h3>12 500 тг</h3>
          <p>12 500 тг RENAULT Корпус фильтра масляного (с радиатором)</p>
        </div>
        <div className="cardN">
          <img src="./IMGS/img.png" alt="" />
          <h3>12 500 тг</h3>
          <p>12 500 тг RENAULT Корпус фильтра масляного (с радиатором)</p>
        </div>
        <div className="cardN">
          <img src="./IMGS/img.png" alt="" />
          <h3>12 500 тг</h3>
          <p>12 500 тг RENAULT Корпус фильтра масляного (с радиатором)</p>
        </div>
      </div>
      <div className="avtoC">
        <h2>Необходимое для каждого авто </h2>
        <div className="avtoCard">
          <div className="bir-avtoCard">
            <div className="aCard">
              <div className="chap-aCard">
                <b>Свечи</b>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1.png" alt="img" />
              </div>
            </div>
            <div className="aCard">
              <div className="chap-aCard">
                <b>Моторные масла</b>
                <p>Свечи Свечи зажигания, свечи накала</p>
                <input type="submit" name="" id="litr" value="1 л"/>
                <input type="submit" name="" id="litr" value="4 л"/>
                <input type="submit" name="" id="litr" value="5 л"/>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1 (1).png" alt="img" />
              </div>
            </div>
            <div className="aCard">
              <div className="chap-aCard">
                <b>Свечи</b>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1 (5).png" alt="img" />
              </div>
            </div>
          </div>
          <div className="ikki-avtoCard">
            <div className="aCard">
              <div className="chap-aCard">
                <b>Свечи</b>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1 (6).png" alt="img" />
              </div>
            </div>
            <div className="aCard">
              <div className="chap-aCard">
                <b>Свечи</b>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0  1 (7).png" alt="img" />
              </div>
            </div>
            <div className="aCard">
              <div className="chap-aCard">
                <b>Свечи</b>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1 (8).png" alt="img" />
              </div>
            </div>
            <div className="aCard">
              <div className="chap-aCard">
                <b>Свечи</b>
                <p>Свечи зажигания, свечи накала</p>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1 (9).png" alt="img" />
              </div>
            </div>
          </div>
          <div className="uch-avtoCard">
            <div className="aCards kok">
              <div className="tepa-aCard">
                <b>Поиск запчастей по VIN номеру авто</b>
                <div className="btnS">
                  <input
                    type="text"
                    placeholder="Введите номер детали, название или VIN"
                  />
                  <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </div>
              </div>
              <div className="past-aCrad">
                <img
                  src="./IMGS/Layer 0 1 (2).png"
                  alt=""
                  className="teparoqqa"
                />
                <img src="./IMGS/Group (1).png" alt="" className="pastroqqa" />
              </div>
            </div>
            <div className="aCard akumlator">
              <div className="chap-aCard yetti">
                <b>Моторные масла</b>
                <p>Свечи Свечи зажигания, свечи накала</p>
              <input type="submit" name="" id="litrs" value="Прямая полярность"/>
              <input type="submit" name="" id="litrs" value="Обратная полярность"/>
              </div>
              <div className="ong-aCard">
                <img src="./IMGS/Layer 0 1 (4).png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
