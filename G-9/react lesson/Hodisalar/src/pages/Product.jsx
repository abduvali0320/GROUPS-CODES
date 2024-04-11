import React, { useContext, useState } from "react";
import Card from "../components/Card";
import { Datas } from "../context/Context";
import { Button } from "@mui/material";
export default function Product() {
    const { products } = useContext(Datas);
    let btns = [
        "smartphones",
        "laptops",
        "fragrances",
        "skincare",
        "groceries",
    ];
    const [ctg, setCtg] = useState("");
    // console.log(products.filter((c) => c.category.includes('smartphones')));
    return (
        <div>
            Product
            <div className="flex gap-10 ">
                <div className="flex flex-col gap-2 p-4 ">
                    {btns.map((btn) => {
                        return (
                            <div key={btn}>
                                <Button
                                    variant="contained"
                                    onClick={() => {
                                        setCtg(btn);
                                        console.log(btn);
                                    }}
                                >
                                    {" "}
                                    {btn}{" "}
                                </Button>
                            </div>
                        );
                    })}
                </div>
                <div className="grid-cols-3 grid gap-2">
                    {products
                        .filter((c) => c.category.includes(ctg))
                        .map((item) => {
                            return <Card items={item} key={item.id} />;
                        })}
                </div>
            </div>
        </div>
    );
}
