import React, { useContext } from "react";
import { DataContext } from "../context/Contex";
export default function Setting() {
  const { data, load, xatolik } = useContext(DataContext);
  return (
    <div>
      {load ? <h1>loading...</h1> : ""}
      {xatolik ? xatolik.toString() : ""}
      {data
        ? data?.map((item) => {
            return (
              <div key={item.id}>
                <h1>title : {item.title}</h1>
                <h1>description : {item.description}</h1>
                <figure>
                  <img src={item.thumbnail} alt={item.title} />
                </figure>
              </div>
            );
          })
        : "data mavjud emas"}
    </div>
  );
}
