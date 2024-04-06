import React, { useContext, useEffect } from "react";
import { Datas } from "../context/Context";
import { useParams } from "react-router-dom";

export default function SingleUser() {
    const user_id = useParams()?.nomi;
    const { people, setSingleInfo, singleInfo } = useContext(Datas);

    if (user_id) {
        useEffect(() => {
            setSingleInfo(people.find((p) => p.id === +user_id));
        }, []);
    }

    

    return (
        <div>
            SingleUser
            <div>
                <h1> name: {singleInfo?.name} </h1>
                <h1> age: {singleInfo?.age} </h1>
            </div>
        </div>
    );
}
