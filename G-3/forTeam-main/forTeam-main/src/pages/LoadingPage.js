import React, { useContext } from "react";
import { Context } from "../context/Context";

function LoadingPage() {
  let { isLoading } = useContext(Context);
  return (
    <div>
      <div className={isLoading ? "isLoading" : "isLoaded"}>
        <div className="loadingCircle"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
