import { Routes, Route } from "react-router-dom";
import Pricing from "./page/pricing/Pricing";
import About from "./page/about/About";

export function RouteApp () {
    <Routes>
        <Route path="pricing" element={<Pricing/>}/>
        <Route path="about" element={<About/>}/>
    </Routes>
}