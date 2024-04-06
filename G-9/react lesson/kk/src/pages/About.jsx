import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function About() {
    return (
        <div>
            About Home Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Unde inventore voluptas corrupti. Quam sit distinctio vel voluptatem
            vitae, pariatur culpa? Voluptatum quibusdam earum magni esse sequi
            suscipit. Quia, error velit!
            <NavLink to={"about_child"} className={"text-red-600"}>
                About child
            </NavLink>
            <Outlet />
        </div>
    );
}
