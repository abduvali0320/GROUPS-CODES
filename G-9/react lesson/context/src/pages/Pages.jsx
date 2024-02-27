import React from "react";
import Contact from "./Contact";
import Setting from "./Setting";
import { Route, Routes } from "react-router-dom";
import Not_found from "./Not_found";
import Form from "./Form";
import Users from "./Table";
export default function Pages() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/:user_id" element={<Form />} />
        <Route path="/table" element={<Users />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/setting/:id" element={<Setting />} />
        <Route path="*" element={<Not_found />} />
      </Routes>
    </div>
  );
}
