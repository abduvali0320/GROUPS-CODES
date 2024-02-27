import axios from "axios";
import { useContext, useEffect } from "react";
import { Context } from "./Context";

function Config() {
  let { setPadsApi, setIsLoading, setTiresApi } = useContext(Context);
  let apiData = async () => {
    try {
      setIsLoading(true);
      let padsData = await axios("http://localhost:4000/datapads", {
        method: "get",
      });
      let tiresData = await axios("http://localhost:4000/datatires", {
        method: "get",
      });
      setTiresApi(tiresData.data);
      setPadsApi(padsData.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    apiData();
  }, []);
}

export default Config;
// https://retoolapi.dev/72EfDh/datatires
