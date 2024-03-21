import { NavLink, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        home
      </NavLink>
      <NavLink
        to={"/posts"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        about
      </NavLink>
      <NavLink
        to={"/users"}
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        users
      </NavLink>
      <Outlet />
    </nav>
  );
}

export default Navbar;
