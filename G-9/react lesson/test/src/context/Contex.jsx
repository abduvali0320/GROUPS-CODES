import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const DataContext = React.createContext();

export default function ContextProvider({ children }) {
  const path = useNavigate();

  const [inp_value, setInp_value] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
  });
  const [users, setUsers] = useState([]);
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
    setUsers([...users, { ...inp_value, id: Date.now() }]);
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

  return (
    <DataContext.Provider
      value={{ handleSend, inp_value, get_inp_value, users }}
    >
      {children}
    </DataContext.Provider>
  );
}
