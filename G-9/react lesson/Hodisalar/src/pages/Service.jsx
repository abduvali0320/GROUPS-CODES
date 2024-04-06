import React, { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Datas } from "../context/Context";

export default function Service() {
    const link = useNavigate();
    const {people} = useContext(Datas)
    const getInfo = (ID) => {
        link(`/service/${ID}`);
    };

    return (
        <div>
            <div>
                <br />
                <br />

                {people.map((programmer) => {
                    return (
                        <div key={programmer.id}>
                            <button
                                onClick={() => getInfo(programmer.id)}
                                className="bg-slate-600"
                            >
                                view
                            </button>
                            <h1> name : {programmer.name} </h1>
                            <h1> age : {programmer.age} </h1>
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
