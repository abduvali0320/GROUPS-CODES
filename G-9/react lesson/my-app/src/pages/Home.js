import axios from "axios";
import React, { useEffect, useState } from "react";

export function Loader() {
  return "loading home page...";
}

export default function Home() {
  const [data, setData] = useState([]);
  const fetch_data = async () => {
    try {
      const m = await axios("https://dummyjson.com/products");
      setData(m.data.products);
      console.log(m);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch_data();
  }, []);

  // const loader_data = useLoaderData();
  // console.log(loader_data);

  return <div className="text-red-600">Home {JSON.stringify(data)} </div>;
}
