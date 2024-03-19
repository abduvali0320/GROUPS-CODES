import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Users from "./pages/Users";
import Navbar from "./components/Navbar";
import PostDetail from "./components/PostDetail";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/posts" element={<Posts />}>
            <Route path="posts_item" element={<PostDetail />}>
              <Route path="posts_elem" element={<h1> posts element </h1>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
