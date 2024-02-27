import { useContext } from "react";
import { Context } from "../context/Context";

function AdminForm() {
  let { handleSendApi, sendTires, sendValue } = useContext(Context);
  return (
    <div className="adminForm">
      <h1>Добавить продукт</h1>
      <form onSubmit={handleSendApi}>
        <input
          required
          type="text"
          placeholder="Введите название продукта"
          name="title"
          value={sendTires?.title}
          onChange={sendValue}
        />
        <input
          required
          type="text"
          placeholder="Подробнее"
          name="subtitle"
          value={sendTires?.subtitle}
          onChange={sendValue}
        />
        <input
          required
          type="text"
          placeholder="О Продукте"
          name="about"
          value={sendTires?.about}
          onChange={sendValue}
        />
        <div className="date-select">
          <input
            required
            type="date"
            name="date"
            value={sendTires?.date}
            onChange={sendValue}
          />
          <select name="reg" value={sendTires?.reg} onChange={sendValue}>
            <option value="Select region" hidden>
              Выберите регион
            </option>
            <option value={"Алматы"}>Алматы</option>
            <option value={"Астана"}>Астана</option>
            <option value={"Шымкент"}>Шымкент</option>
          </select>
        </div>
        <input
          required
          type="number"
          name="price"
          placeholder="Введите цену"
          value={sendTires?.price}
          onChange={sendValue}
        />
        {/* <input type="file" /> */}
        <button type="submit">Отправить форму</button>
      </form>
    </div>
  );
}

export default AdminForm;
