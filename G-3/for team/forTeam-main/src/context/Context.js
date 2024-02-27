import { createContext, useRef, useState } from "react";
import brake from "../assets/img/brake_pads.png";
import tiresIMG from "../assets/img/tires.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export const Context = createContext();

export default function ContextProv({ children }) {
  let [sendTires, setSendTires] = useState({
    title: "",
    subtitle: "",
    reg: "",
    about: "",
    date: "",
    price: "",
  });
  let [isLoading, setIsLoading] = useState(false);
  let [padsApi, setPadsApi] = useState([]);
  let [tiresApi, setTiresApi] = useState([]);
  let path = useNavigate();

  // let otherCategories = {
  //   oth1: [
  //     {
  //       other: "Только с фото",
  //     },
  //     {
  //       other: "Доставка в бокс",
  //     },
  //   ],
  //   oth2: [
  //     {
  //       other: "В наличии",
  //     },
  //     {
  //       other: "На заказ",
  //     },
  //   ],
  // };

  let producers = ["Denso", "febi", "ngk", "nissan", "renault", "vag"];
  let status = ["", "Новые", "б/у"];
  let sort = ["по дате объявления", "по цене", "по рейтингу"];
  let [producer, setProducer] = useState([]);
  let [stState, setStatus] = useState("");
  let [sorted, setSorted] = useState("");
  padsApi = padsApi.map((elem) => ({ ...elem, img: brake }));
  tiresApi = tiresApi.map((elem) => ({ ...elem, img: tiresIMG }));

  let [pads, setPads] = useState("");

  let activeCategory1 = useRef();
  let activeCategory2 = useRef();
  let actives = [activeCategory1, activeCategory2];

  function removeActive() {
    actives.map((elem) => {
      return elem.current.classList.remove("activeCategory");
    });
  }

  function handleActive(e) {
    removeActive();
    e.target.classList.add("activeCategory");
  }

  function handleSetProd(item) {
    setProducer([...producer, item]);
    console.log(producer.filter((elem) => elem !== item));
  }

  // tab control in single product
  let tab1 = useRef();
  let tab2 = useRef();
  let tab3 = useRef();

  let content_1 = useRef();
  let content_2 = useRef();
  let content_3 = useRef();

  let tabs = [tab1, tab2, tab3];
  let contents = [content_1, content_2, content_3];
  function refRemoveClass() {
    tabs.map((item, index) => {
      return item.current.classList.remove("tab_active");
    });
    contents.map((item, index) => {
      return item.current.classList.remove("content_active");
    });
  }
  function handleTab(e, num) {
    refRemoveClass();
    e.target.classList.add("tab_active");
    contents[num].current.classList.add("content_active");
  }

  // function handleShow(obj) {
  //   // path(`/brakepads/${obj.id}`);
  //   console.log(obj);
  // }

  function handleShowTires(obj, link) {
    path(`/${link}/${obj.id}`);
    // console.log(obj);
  }

  function sendValue(e) {
    setSendTires({ ...sendTires, [e.target.name]: e.target.value });
  }

  function clearApiForm() {
    setSendTires({
      title: "",
      subtitle: "",
      reg: "",
      about: "",
      date: "",
      price: "",
    });
  }

  function handleSendApi(e) {
    e.preventDefault();
    // let formData = new FormData();

    // for (let item in sendTires) {
    //   formData.append(item, sendTires[item]);
    // }
    axios
      .post("https://retoolapi.dev/72EfDh/datatires", { ...sendTires })
      .then((res) => {
        if (res.status === 201) {
          setTiresApi([...tiresApi, res.data]);
          toast.success("Успешно добавлено!");
        } else {
          toast.error("Что то пошло не так на сайте");
        }
      });
    clearApiForm();
  }

  function handleDelTires(obj) {
    if (window.confirm("Удалить этот пост?")) {
      axios
        .delete(`https://retoolapi.dev/72EfDh/datatires/${obj.id}`)
        .then((res) => {
          if (res.status === 200) {
            setTiresApi(tiresApi.filter((item) => item.id !== obj.id));
            toast.success("Успешно удалено!");
          } else {
            toast.error("Произошла ошибка!");
          }
        });
    }
  }

  return (
    <Context.Provider
      value={{
        status,
        handleDelTires,
        sort,
        producers,
        pads,
        setPads,
        tab1,
        tab2,
        tab3,
        handleSetProd,
        handleTab,
        content_1,
        content_2,
        content_3,
        handleActive,
        activeCategory1,
        activeCategory2,
        padsApi,
        setPadsApi,
        isLoading,
        setIsLoading,
        sendTires,
        setSendTires,
        sendValue,
        handleSendApi,
        tiresApi,
        setTiresApi,
        sorted,
        setSorted,
        stState,
        setStatus,
        producer,
        setProducer,
        handleShowTires,
      }}
    >
      {children}
    </Context.Provider>
  );
}
