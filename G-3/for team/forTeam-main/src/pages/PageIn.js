import { Route, Routes } from "react-router-dom";
import { Footer } from "../components/footer/Footer";
import Nav from "../components/navbar/Nav";
import Buyer from "./Buyer";
import Contacts from "./Contacts";
import Home from "./Home";
import Pads from "./Pads";
import Seller from "./Seller";
import SingleProduct from "./SingleProduct";
import Support from "./Tires";

// let navFoot = [<Nav />, <Footer />];

export default function PageIn() {
  return (
    <>
      <Routes>
        <Route element={<Nav />}>
          <Route element={<Footer />}>
            <Route path="/" element={<Home />} />
            <Route path="/brakepads" element={<Pads />} />
            <Route path="/Tires" element={<Support />} />
            <Route path="/seller" element={<Seller />} />
            <Route path="/buyer" element={<Buyer />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/brakepads/:id" element={<SingleProduct />} />
            <Route path="/tires/:id" element={<SingleProduct />} />
            <Route path="/single" element={<SingleProduct />} />
            {/* <Route path="/adminform" element={<AdminForm />} /> */}
          </Route>
        </Route>
      </Routes>
    </>
  );
}
