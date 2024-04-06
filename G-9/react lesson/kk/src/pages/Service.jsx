import React, { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Service() {
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
    let path = useNavigate();
    let id = useParams();
    const getInfo = (ID) => {
        path(`/service/${ID}`);
        let item = people.find((c) => c.id === +id);
    };
    const [info, setInfo] = useState({});
    useEffect(() => {
        setInfo(people.find((c) => c.id === +id.nomi));
    }, []);

    return (
        <div>
            <div>
                <br />
                <br />
                {JSON.stringify(info)}
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
