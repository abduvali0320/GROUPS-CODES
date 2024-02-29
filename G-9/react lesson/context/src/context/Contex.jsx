import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  const path = useNavigate();

  const [data, setData] = useState([]);

  const [load, setLoad] = useState(true);

  const [xatolik, setError] = useState(null);

  useEffect(() => {
    setLoad(true);
    axios("https://dummyjson.com/products/", { method: "get" })
      .then((res) => {
        setData(res.data.products);
        // console.log(res);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoad(false);
        console.log("malumot olish tugatildi");
      });

    axios.get("http://localhost:3000/data").then((kerg) => console.log(kerg));
  }, []);

  const [inpValue, setInpValue] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });
  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) || []
  );

  const localRefresh_users = () => {
    setUsers(JSON.parse(localStorage.getItem("users")) || []);
  };

  const clearInpValue = () => {
    setInpValue({
      name: "",
      password: "",
      email: "",
      phone: "",
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inpValue.id) {
      // setUsers([...users, { ...inpValue, id: Date.now() }]);
      localStorage.setItem(
        "users",
        JSON.stringify([...users, { ...inpValue, id: Date.now() }])
      );
      localRefresh_users();
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Malumotingiz saqlandi!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        title: "Tahrirlashni hoxlaysizmi?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "saqlash",
        denyButtonText: `saqlanmasin`,
      }).then((result) => {
        if (result.isConfirmed) {
          // setUsers(users.map((c) => (c.id === inpValue.id ? inpValue : c)));
          localStorage.setItem(
            "users",
            JSON.stringify(
              users.map((c) => (c.id === inpValue.id ? inpValue : c))
            )
          );
          localRefresh_users();
          Swal.fire("Saqlandi!", "", "success");
        } else if (result.isDenied) {
          Swal.fire("O'zgarish saqlanmadi", "", "info");
        }
      });
    }

    e.target.reset();
    clearInpValue();
    path("/table");
  };

  const getInpValue = (e) => {
    setInpValue({
      ...inpValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleDelete = (user_id) => {
    Swal.fire({
      title: "Ishonchingiz komilmi?",
      text: "Malumotingiz o'chib ketadi",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ha, o'chirilsin!",
    }).then((result) => {
      if (result.isConfirmed) {
        // setUsers(users.filter((item) => item.id !== user_id));
        localStorage.setItem(
          "users",
          JSON.stringify(users.filter((item) => item.id !== user_id))
        );
        clearInpValue();
        localRefresh_users();
        Swal.fire({
          title: "O'chirildi!",
          text: "Malumotingiz o'chirildi!",
          icon: "success",
        });
      }
    });
  };
  const handleEdit = (user) => {
    setInpValue(user);
    path(`/${user?.id}`);
  };

  return (
    <DataContext.Provider
      value={{
        handleSend,
        inpValue,
        users,
        handleDelete,
        handleEdit,
        setInpValue,
        getInpValue,
        clearInpValue,
        data,
        load,
        xatolik,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
