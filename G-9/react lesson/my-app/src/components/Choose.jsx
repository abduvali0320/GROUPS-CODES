import React from "react";

export default function Choose() {
  let choose_data = [
    {
      id: 1,
      icon: `fa-solid fa-user-large`,
      header: "Дорожим каждым клиентом",
      text: "Персонализированный сервис. Получите экспертную помощь и профессиональные рекомендации для выбора идеального авто.",
    },
    {
      id: 2,
      icon: `fa-solid fa-dollar-sign`,
      header: "Честная цена",
      text: "Мы предлагаем вам авто по прозрачным ценам, избегая ненужных переплат дилерам и автосалонам.",
    },
    {
      id: 3,
      icon: `fa-solid fa-circle-check`,
      header: "Дорожим каждым клиентом",
      text: "Наша комиссия фиксирована и не меняется в зависимости от цены автомобиля, объема услуг или метеорологических условий",
    },
    {
      id: 4,
      icon: `fa-solid fa-umbrella`,
      header: "Отсутствие рисков",
      text: "Во время транспортировки вашего автомобиля он застрахован. За процесс в России ответственность полностью на нашей компании.",
    },
    {
      id: 5,
      icon: `fa-solid fa-magnifying-glass`,
      header: "Юридическая чистота",
      text: "Автомобиль без пробега по РФ. Вы первый хозяин. Без проблем с документами и при постановке на государственный учет.",
    },
    {
      id: 6,
      icon: `fa-solid fa-thumbs-up`,
      header: "Дополнительный сервис",
      text: "Обслужим, докупим необходимые запчасти, расходники и аксессуары. Установим сигнализацию и мультимедиа.",
    },
  ];

  return (
    <div className="choose">
      <div className="container">
        <div className="text_style">
          <h1>Почему Вам стоит выбрать нас?</h1>
          <p>
            Выбирая нас, вы получаете индивидуальный сервис, честные цены,
            фиксированную комиссию, застрахованный транспорт и полное
            сопровождение на каждом этапе.
          </p>
        </div>
        <div className="card_box">
          {choose_data.map((item) => {
            return (
              <div className="card_boxer" key={item.id}>
                <i className={item.icon}></i>
                <h2>{item.header}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
