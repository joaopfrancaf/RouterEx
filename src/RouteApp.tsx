import { Routes, Route } from "react-router-dom";
import Pricing from "./page/pricing/Pricing";
import About from "./page/about/About";
import Product from "./page/pricing/products/Product";
import Welcome from "./component/welcome/welcome";

export function RouteApp () {
    return (
        <Routes>
            <Route path="/" element={<Welcome/>}/>
            <Route path="pricing" element={<Pricing/>}>
                <Route path="product" element={<Product/>} />
            </Route>
            <Route path="about" element={<About/>}/>
        </Routes>
    )
}

export default RouteApp