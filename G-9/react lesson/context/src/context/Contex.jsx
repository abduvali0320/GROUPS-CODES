import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  const path = useNavigate();

  const [inp_value, setInp_value] = useState({
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

  const clear_inp_value = () => {
    setInp_value({
      name: "",
      password: "",
      email: "",
      phone: "",
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!inp_value.id) {
      // setUsers([...users, { ...inp_value, id: Date.now() }]);
      localStorage.setItem(
        "users",
        JSON.stringify([...users, { ...inp_value, id: Date.now() }])
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
          // setUsers(users.map((c) => (c.id === inp_value.id ? inp_value : c)));
          localStorage.setItem(
            "users",
            JSON.stringify(
              users.map((c) => (c.id === inp_value.id ? inp_value : c))
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
    clear_inp_value();
    path("/table");
  };

  const get_inp_value = (e) => {
    setInp_value({
      ...inp_value,
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
        clear_inp_value();
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
    setInp_value(user);
    path(`/${user?.id}`);
  };

  return (
    <DataContext.Provider
      value={{
        handleSend,
        inp_value,
        get_inp_value,
        users,
        handleDelete,
        handleEdit,
        setInp_value,
        clear_inp_value,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
