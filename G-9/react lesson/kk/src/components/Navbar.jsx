import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Navbar() {
    let fkejbfkj = useNavigate();
    return (
        <>
            <div className="flex justify-between ps-20 pe-20">
                Navbar
                <button onClick={() => fkejbfkj(-1)} className="bg-slate-500">
                    ortga
                </button>
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"> home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact"> contact us </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about"> about </NavLink>
                    </li>
                    <li>
                        <NavLink to="/service"> service </NavLink>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    );
}
