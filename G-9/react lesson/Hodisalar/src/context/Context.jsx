import React, { createContext, useState } from "react";
import { ru } from "../assets/ru";
import { en } from "../assets/en";
import { uz } from "../assets/uz";
export const Datas = createContext();

export default function DatasProvider({ children }) {
    const [singleInfo, setSingleInfo] = useState({});
    const [lang, setLang] = useState(localStorage.getItem("lan") || "en");
    const lang_datas = { ru, en, uz };
    let people = [
        {
            id: 0,
            name: "Abror",
            age: 18,
        },
        {
            id: 1,
            name: "Gulhayo",
            age: 15,
        },
        {
            id: 2,
            name: "Maftuna",
            age: 18,
        },
        {
            id: 3,
            name: "Dilnoza",
            age: 18,
        },
    ];
    return (
        <Datas.Provider
            value={{
                people,
                singleInfo,
                setSingleInfo,
                lang_datas,
                lang,
                setLang,
            }}
        >
            {children}
        </Datas.Provider>
    );
}
