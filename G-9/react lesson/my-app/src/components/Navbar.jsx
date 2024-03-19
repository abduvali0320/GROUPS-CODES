import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to={"/"}>home</NavLink>
      <NavLink to={"/posts"}>about</NavLink>
      <NavLink to={"/users"}>users</NavLink>
      <Outlet />
    </nav>
  );
}

export default Navbar;
