import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { Datas } from "../context/Context";

import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Slider_price from "../components/Slider_price";
import { Button } from "@mui/material";

export default function Product() {
    const { products, price, filterData, setFiltderData } = useContext(Datas);

    const handleFilter = () => {
        setFiltderData(
            products.filter(
                (c) =>
                    c.category.includes(ctg) &&
                    c.color.includes(color) &&
                    price[0] <= c.price &&
                    price[1] >= c.price
            )
        );
    };

    const handleSearch = () => {
        setFiltderData(
            products.filter(
                (c) =>
                    c.brand.toLowerCase().trim().includes(search) ||
                    c.title.toLowerCase().trim().includes(search) ||
                    c.category.toLowerCase().trim().includes(search)
            )
        );
    };

    let btns_category = [""];
    let btns_color = [""];
    const [search, setSearch] = useState("");

    const getKey = (array, btns_array, key) => {
        new Set(array.map((c) => c[key])).forEach((y) => btns_array.push(y));
    };

    getKey(products, btns_category, "category");
    getKey(products, btns_color, "color");

    const [ctg, setCtg] = useState("");
    const [color, setColor] = useState("");

    // let p = products.filter((l) => 500 < l.price && l.price < 1500);
    // console.log(p);

    return (
        <div className="continer">
            <div className="flex p-3 gap-3 items-center">
                <h1 className="w-2/12 text-3xl">Filter</h1>
                <div>
                    <Button
                        variant="contained"
                        color="info"
                        onClick={handleFilter}
                    >
                        {" "}
                        filt{" "}
                    </Button>
                </div>
                <div className="border ps-2 w-10/12 flex items-center rounded-lg overflow-hidden">
                    <button onClick={handleSearch}>
                        <SearchIcon />
                    </button>
                    <input
                        type="search"
                        className="p-2 w-full"
                        placeholder="search..."
                        onChange={(e) =>
                            setSearch(e.target.value.toLowerCase().trim())
                        }
                    />
                </div>
            </div>
            <div className="flex gap-0">
                <div className="flex flex-col gap-0 pt-0 w-96">
                    <div className="category">
                        {
                            <Button
                                className="w-full"
                                color="primary"
                                variant="contained"
                            >
                                Category
                                <span>
                                    <KeyboardArrowDownIcon />
                                </span>
                            </Button>
                        }
                        <ul className="p-2">
                            {btns_category.map((btn) => {
                                return (
                                    <li key={btn}>
                                        <Button
                                            variant="contained"
                                            color="secondary"
                                            className="w-full mb-1"
                                            style={
                                                ctg === btn
                                                    ? { background: "black" }
                                                    : {}
                                            }
                                            onClick={() => {
                                                setCtg(btn);
                                            }}
                                        >
                                            {btn === "" ? "all" : btn}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="color_btns">
                        {
                            <Button
                                className="w-full"
                                color="primary"
                                variant="contained"
                            >
                                Color
                            </Button>
                        }
                        <ul className="p-2">
                            {btns_color.map((btn) => {
                                return (
                                    <li key={btn}>
                                        <Button
                                            variant="contained"
                                            color="primary"
                                            className="w-full mb-1"
                                            style={
                                                color === btn
                                                    ? { background: btn }
                                                    : {}
                                            }
                                            onClick={() => {
                                                setColor(btn);
                                            }}
                                        >
                                            {btn === "" ? "clear" : btn}
                                        </Button>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="price_box">
                        <Slider_price />
                    </div>
                </div>
                <div className="grid-cols-4 grid gap-2 p-2">
                    {filterData
                        // .filter(
                        //     (c) =>
                        //         c.brand.toLowerCase().trim().includes(search) ||
                        //         c.category.toLowerCase().trim().includes(search)
                        // )
                        .map((item) => {
                            return <Card items={item} key={item.id} />;
                        })}
                </div>
            </div>
        </div>
    );
}
