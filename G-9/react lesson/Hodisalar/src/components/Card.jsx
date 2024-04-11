import React from "react";

export default function Card(prop) {
    let { items } = prop;
    return (
        <div className="card">
            <img className="card-img-top" alt="..." src={items?.thumbnail} />
            <div className="card-body">
                <h5 className="card-title"> {items?.title} </h5>
                <p className="card-text"> brand: {items?.brand}</p>
                <p className="card-text"> category: {items?.category}</p>
            </div>
        </div>
    );
}
