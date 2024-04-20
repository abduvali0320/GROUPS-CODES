import React, { useContext } from "react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { Datas } from "../context/Context";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from '@mui/icons-material/LocalMall';
export default function Navbar() {
    let { lang_datas, lang } = useContext(Datas);
    let { setLang, filterData, cart } = useContext(Datas);

    let language = ["uz", "en", "ru"];
    function getLanguage(lan) {
        localStorage.setItem("lan", lan);
        setLang(localStorage.getItem("lan"));
    }
    if (!language.includes(localStorage.getItem("lan"))) {
        localStorage.setItem("lan", "en");
        setLang(localStorage.getItem("lan"));
    }

    const like_count = () => {
        let like_number = filterData.filter((item) => item.like).length
        if (like_number > 0) {
            if (like_number > 9) {
                return "+" + 9
            }
            else {
                return like_number
            }
        }
        return ''
    }
    return (
        <>
            <nav className="bg-orange">
                <div className="container flex justify-between ps-4 pe-4 items-center">
                    <Link to="/" className="text-3xl">
                        <b className="text-gray-light">
                            LO<span className="text-green">GO</span>
                        </b>
                    </Link>
                    <ul className="flex items-center">
                        <li>
                            <NavLink to="/">{lang_datas[lang]?.link_1}</NavLink>
                        </li>
                        <li>
                            <NavLink to="/products">
                                {lang_datas[lang]?.link_2}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">
                                {lang_datas[lang]?.link_3}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                {lang_datas[lang]?.link_4}
                            </NavLink>
                        </li>
                        <li className="bg-pink p-2 text-gray-light rounded-lg">
                            <span className="w-5 inline-block" >
                                {like_count()}
                            </span>
                            <FavoriteIcon />
                        </li>
                        <li>
                            <Link to={'/cart-table'} className="cart_btn" >  {cart.length > 0 ? cart.length : ''}  <LocalMallIcon /> </Link>
                        </li>
                        <li className="language relative mb-7">
                            <span className="absolute flex flex-col gap-1 z-10">
                                <button className="text-gray-dark rounded-md border-solid border-2 mx-2 p-1 bg-gray-light">
                                    {lang}
                                </button>
                                {language.map((l) => {
                                    return (
                                        <button
                                            key={l}
                                            style={
                                                l === lang
                                                    ? { display: "none" }
                                                    : {}
                                            }
                                            className="text-gray-dark rounded-md hover:bg-gray hover:text-light border-solid border-2 mx-2 p-1 bg-gray-light"
                                            onClick={() => getLanguage(l)}
                                        >
                                            {l}
                                        </button>
                                    );
                                })}
                            </span>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}
