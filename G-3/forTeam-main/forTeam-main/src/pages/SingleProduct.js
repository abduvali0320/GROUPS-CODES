import React, { useContext, useEffect } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import testImg from "../assets/oil product img/Rectangle 95.png";
import { Context } from "../context/Context";
import AOS from "aos";
import "aos/dist/aos.css";
let testData = [
  { img: testImg },
  { img: testImg },
  { img: testImg },
  { img: testImg },
  { img: testImg },
];

export default function SingleProduct() {
  useEffect(() => {
    AOS.init();
  }, []);
  let productId = useParams();
  let locationParam = useLocation();
  let {
    tab1,
    tab2,
    tab3,
    handleTab,
    content_1,
    content_2,
    content_3,
    padsApi,
    tiresApi,
  } = useContext(Context);
  let param = null;
  if (locationParam.pathname.includes("tires")) {
    param = tiresApi?.filter((item) => item?.id === +productId?.id)?.[0];
  } else {
    param = padsApi?.filter((item) => item?.id === +productId?.id)?.[0];
  }
  return (
    <div className="single_product_page" data-aos="flip-left">
      <div className="path_single content_center">
        <Link to={"/"}>Главная</Link>
        <Link to={"/motorOil"}>/ Моторные масла </Link>
        <Link>/ {param?.title}</Link>
      </div>
      <div className="single_main content_center">
        <div className="first_part_in_single_product">
          <figure>
            <img src={param?.img} alt="just img" />
          </figure>

          <div className="other_products_images">
            {testData.map((item, index) => {
              return (
                <button className="img_btn" key={index}>
                  <img src={param?.img} alt={param?.title} />
                </button>
              );
            })}
          </div>
        </div>

        <div className="second_part_in_single_product_page">
          <div className="header_in_single_product">
            <h1>{param?.title}</h1>
          </div>

          <div className="rating_describtions_orders">
            <div className="rating_card">
              <div className="star_in_rating_card">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star_in_rating_card">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star_in_rating_card">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star_in_rating_card">
                <i className="fa-solid fa-star"></i>
              </div>
              <div className="star_in_rating_card">
                <i className="fa-solid fa-star"></i>
              </div>
              <p>5.0</p>
            </div>

            <div className="descriptions">
              <p>130 отзывов</p>
            </div>

            <div className="orders">
              <p>288 заказов </p>
            </div>
          </div>

          <div className="salary_in_single_product">
            <p>Цена</p>
            <h3>{param?.price}₸</h3>
          </div>

          <div className="red_btn_in_single_product">
            <button className="red_btn">ВЫБРАТЬ ПРОДАВЦА</button>
          </div>

          <div className="complect">
            <div className="header_in_complect">Комплектация</div>
            <ul>
              <li>объем: 5 л</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="tab_control content_center">
        <button
          onClick={(e) => handleTab(e, 0)}
          className="tab_btn tab_active"
          ref={tab1}
        >
          Продавцы
        </button>

        <button onClick={(e) => handleTab(e, 1)} className="tab_btn" ref={tab2}>
          Отзывы
        </button>

        <button onClick={(e) => handleTab(e, 2)} className="tab_btn" ref={tab3}>
          Характеристики
        </button>
      </div>

      <div className="content_tab content_center">
        <div ref={content_1} className="content_box content_active">
          <div className="seller_in_single_div">
            <div className="seller_card_in_single">
              <div className="first_header_part_in_single">
                <h2>Happy store</h2>
                <div className="stars_in_single_seller">
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>

                <div className="describtion_in_single_seller">
                  <p>130 отзывов</p>
                </div>
              </div>

              <div className="second_about_product_single_seller">
                <div className="desb_card_in_single_seller">
                  <p>Доставка из:</p>
                  <span>г. Алматы</span>
                </div>

                <div className="desb_card_in_single_seller">
                  <p>Срок доставки:</p>
                  <span>Под заказ, до 10 дней</span>
                </div>

                <div className="desb_card_in_single_seller">
                  <p>В наличии:</p>
                  <span> 1 шт.</span>
                </div>

                <div className="desb_card_in_single_seller">
                  <p>Состояние:</p>
                  <span>Новый</span>
                </div>
              </div>

              <div className="third_salary_part_in_single_seller">16 385 ₸</div>

              <div className="last_sevice_and_choose_part_in_single_seller">
                <button className="outline_btn">СЕРВИС</button>
                <button className="red_btn">ВЫБРАТЬ</button>
              </div>
            </div>
          </div>

          <div className="seller_in_single_div">
            <div className="seller_card_in_single">
              <div className="first_header_part_in_single">
                <h2>Happy store</h2>
                <div className="stars_in_single_seller">
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="star_in_single_seller_card">
                    <i className="fa-solid fa-star"></i>
                  </div>
                </div>

                <div className="describtion_in_single_seller">
                  <p>130 отзывов</p>
                </div>
              </div>

              <div className="second_about_product_single_seller">
                <div className="desb_card_in_single_seller">
                  <p>Доставка из:</p>
                  <span>г. Алматы</span>
                </div>

                <div className="desb_card_in_single_seller">
                  <p>Срок доставки:</p>
                  <span>Под заказ, до 10 дней</span>
                </div>

                <div className="desb_card_in_single_seller">
                  <p>В наличии:</p>
                  <span> 1 шт.</span>
                </div>

                <div className="desb_card_in_single_seller">
                  <p>Состояние:</p>
                  <span>Новый</span>
                </div>
              </div>

              <div className="third_salary_part_in_single_seller">16 385 ₸</div>

              <div className="last_sevice_and_choose_part_in_single_seller">
                <button className="outline_btn">СЕРВИС</button>
                <button className="red_btn">ВЫБРАТЬ</button>
              </div>
            </div>
          </div>
        </div>

        <div ref={content_2} className="content_box">
          <div className="describs_div_single">
            <button className="outline_btn">
              Войдите, чтобы оставить отзыв
            </button>
          </div>
        </div>

        <div ref={content_3} className="content_box p_bottom_to_footer">
          <div className="describtion_single_seller">
            <p>
              Масло SGAZPROMNEFT Super 10W-40 для самых современных
              малотоксичных двигателей, соответствующих требованиям Евро 5, 4,
              3, 2, и US 2002 по выбросам.
            </p>
          </div>

          <div className="about_product_in_single_seller">
            <div className="proiz_card">
              <p>Производитель</p> <span>GAZPROMNEFT</span>
            </div>
            <div className="proiz_card">
              <p>Наименование</p> <span>Моторное масло</span>
            </div>
          </div>

          <div className="characters_in_single_seller_div">
            <h1>Общие характеристики</h1>
            <div className="characters_in_single_seller">
              <div className="character_card">
                <p> Ширина (мм)</p>
                <span>193.1 мм </span>
              </div>

              <div className="character_card">
                <p>Толщина (мм) </p>
                <span>19.1 мм</span>
              </div>

              <div className="character_card">
                <p>Сторона установки </p>
                <span>передний мост </span>
              </div>

              <div className="character_card">
                <p>Дополнительный артикул / Доп. информация 2</p>
                <span>с прижимной пластиной </span>
              </div>

              <div className="character_card">
                <p> Высота (мм)</p>
                <span>64.1 мм </span>
              </div>

              <div className="character_card">
                <p>Датчик износа</p>
                <span>подготовлено для датчика износа колодок</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
