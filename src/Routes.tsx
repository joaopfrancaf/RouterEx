import { Routes, Route } from "react-router-dom";
import Pricing from "./page/pricing/Pricing";
import About from "./page/about/About";
import Product from "./page/pricing/products/Product";

export function RouteApp () {
    <Routes>
        <Route path="pricing" element={<Pricing/>}>
            <Route path="product" element={<Product/>} />
        </Route>
        <Route path="about" element={<About/>}/>
    </Routes>
}