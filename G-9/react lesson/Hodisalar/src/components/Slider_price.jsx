import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Datas } from "../context/Context";

export default function Slider_price() {
    const { price, setPrice } = useContext(Datas);

    const handleChange = (event, newValue) => {
        setPrice(newValue);
        console.log(price);
    };

    return (
        <Box>
            <Slider
                value={price}
                onChange={handleChange}
                valueLabelDisplay="auto"
                max={1500}
                min={0}
                step={10}
            />
        </Box>
    );
}
