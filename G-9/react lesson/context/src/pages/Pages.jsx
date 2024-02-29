import React from "react";
import Contact from "./Contact";
import Setting from "./Setting";
import { Route, Routes } from "react-router-dom";
import NotFound from "./Not_found";
import Form from "./Form";
import Users from "./Table";
export default function Pages() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/:userId" element={<Form />} />
        <Route path="/table" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}
