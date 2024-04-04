import React, { useEffect, useState } from "react";
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
    let { nomi } = useParams();

    const [singleInfo, setSingleInfo] = useState({});

    if (nomi) {
        useEffect(() => {
            setSingleInfo(people.find((l) => l.id === +nomi));
        }, []);
    }

    const getInfo = (ID) => {
        path(`/service/${ID}`);
        // console.log(people.find((l) => l.id === +ID));
    };

    return (
        <div>
            <div>
                <br />
                <br />
                {nomi ? (
                    <>
                        <h1> name: {singleInfo?.name} </h1>
                        <h1> age: {singleInfo?.age} </h1>
                    </>
                ) : (
                    people.map((programmer) => {
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
                    })
                )}
            </div>
        </div>
    );
}
