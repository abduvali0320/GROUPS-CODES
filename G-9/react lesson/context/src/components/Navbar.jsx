import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <h1 className="logo">
          <Link to={"/"}> logo </Link>
        </h1>
        <ul>
          <li>
            <NavLink to={"/"}> Form </NavLink>
          </li>
          <li>
            <NavLink to={"/table"}>Table</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}> contact us </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
