import React, { useContext } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Datas } from "../context/Context";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Card(prop) {
    const { handleLike, getItemArray } = useContext(Datas);
    let { items } = prop;
    console.log(items);
    return (
        <div className="card relative">
            <img className="card-img-top" alt="..." src={items?.thumbnail} />
            <div
                className="absolute top-0 right-0 bg-gray-light p-2 rounded-lg cursor-pointer"
                onClick={() => handleLike(items.id)}
            >
                {items.like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </div>
            <div className="card-body relative ">
                <h5 className="card-title"> {items?.title} </h5>
                <p className="card-text"> brand: {items?.brand}</p>
                <p className="card-text"> category: {items?.category}</p>
                <p className="card-text"> color: {items?.color}</p>
                <p className="card-text"> price: {items?.price}$</p>
                <button className="bg-gray-dark text-gray-light"> view </button>
                <button className="bg-green p-2 rounded-lg absolute bottom-2 right-2" 
                    onClick={() => getItemArray(items)}
                > <AddShoppingCartIcon /> </button>
            </div>
        </div>
    );
}
