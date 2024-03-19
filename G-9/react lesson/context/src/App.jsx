import React, { useEffect, useState } from "react";
import Pages from "./pages/Pages";
import Navbar from "./components/Navbar";
import "./index.css";
import axios from "axios";
export default function App() {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState("");

  const checkStatus = (fewrf) => {
    if (fewrf % 2 === 0) setStatus("juft son");
    else setStatus("toq son");
  };

  const onPlus = () => {
    setCount(count + 1);
    checkStatus(count + 1);
  };

  const onMinus = () => {
    setCount(count + 1);
    checkStatus(count + 1);
  };
  console.log("render");

  axios
    .get("")
    .then(() => {})
    .then();

  return (
    <div>
      <Navbar />
      <Pages />
    </div>
  );
}
