import React from "react";
import { Link, Outlet } from "react-router-dom";
const Posts = () => {
  return (
    <div>
      posts
      <Link to={"posts_item"}>post item</Link>
      <Outlet />
    </div>
  );
};

export default Posts;
