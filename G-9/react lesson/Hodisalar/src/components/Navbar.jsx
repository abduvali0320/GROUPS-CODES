import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Datas } from "../context/Context";

export default function Navbar() {
    let fkejbfkj = useNavigate();
    let { lang_datas, lang } = useContext(Datas);
    // console.log(lang_datas[lang]);

    // let obj = {
    //     name: "abror",
    //     age: 17,
    // };
    // let k = "name";
    // console.log(obj.k);

    return (
        <>
            <div className="flex justify-between ps-20 pe-20">
                <Link to="/"> Navbar </Link>
                <button onClick={() => fkejbfkj(-1)} className="bg-slate-500">
                    ortga
                </button>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"> {lang_datas[lang]?.link_1} </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            {lang_datas[lang]?.link_2}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            {lang_datas[lang]?.link_3}
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service">
                            {lang_datas[lang]?.link_4}{" "}
                        </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}
