import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function PostDetail() {
  let cars_type = [
    {
      id: 1,
      country: "Японии",
    },
    {
      id: 2,
      country: "Китая",
    },
    {
      id: 3,
      country: "Кореи",
    },
  ];

  return (
    <div>
      <Link to={"posts_elem"}> posts_elem </Link>
      <Outlet />
    </div>
  );
}
