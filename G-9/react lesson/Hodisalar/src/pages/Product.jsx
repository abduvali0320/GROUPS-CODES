import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { Datas } from "../context/Context";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Product() {
    const { products } = useContext(Datas);
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

    return (
        <div className="continer">
            <div className="flex p-3 gap-3 items-center">
                <h1 className="w-2/12 text-3xl">Filter</h1>
                <div className="border ps-2 w-10/12 flex items-center rounded-lg overflow-hidden">
                    <button>
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
                    <div className="category">
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
                            {btns_color.map((btn) => (
                                <li key={btn}>
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        className="w-full mb-1"
                                        style={
                                            btn === ""
                                                ? { background: "silver" }
                                                : {}
                                        }
                                        onClick={() => {
                                            setColor(btn);
                                        }}
                                    >
                                        {btn === "" ? "clear" : btn}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="grid-cols-4 grid gap-2 p-2">
                    {products
                        .filter(
                            (c) =>
                                c.category.includes(ctg) &&
                                c.color.includes(color) &&
                                (c.brand
                                    .toLowerCase()
                                    .trim()
                                    .includes(search) ||
                                    c.category
                                        .toLowerCase()
                                        .trim()
                                        .includes(search))
                        )
                        .map((item) => {
                            return <Card items={item} key={item.id} />;
                        })}
                </div>
            </div>
        </div>
    );
}
