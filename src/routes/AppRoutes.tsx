import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home";
import  ProductPage  from "../pages/ProductPage";
import  NotFound  from "../pages/NotFound";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="*" element={ <NotFound />} />
        </Routes>
    )
}