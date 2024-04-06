import React, { useContext, useState } from "react";
import { Datas } from "../context/Context";
export default function Home() {
    let { setLang } = useContext(Datas);
    const [count, setCount] = useState(sessionStorage.getItem("count") || 0);
    let language = ["uz", "en", "ru", "toj", "ar"];

    const increment = () => {
        sessionStorage.setItem("count", +count + 1);
        setCount(sessionStorage.getItem("count"));
    };
    const decriment = () => {
        sessionStorage.setItem("count", count - 1);
        setCount(sessionStorage.getItem("count"));
    };

    function getLanguage(lan) {
        localStorage.setItem("lan", lan);
        setLang(localStorage.getItem("lan"));
    }
    if (!language.includes(localStorage.getItem("lan"))) {
        localStorage.setItem("lan", "en");
        setLang(localStorage.getItem("lan"));
    }

    return (
        <div>
            <button onClick={increment}> plus </button>
            <h1>count: {count}</h1>
            <button onClick={decriment}> minus </button>
            <br />
            {language.map((l) => {
                return (
                    <button
                        key={l}
                        className="text-blue-700 border-solid mx-2 p-3"
                        onClick={() => getLanguage(l)}
                    >
                        {l}
                    </button>
                );
            })}
        </div>
    );
}
