import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Zpravodaj from "./Zpravodaj/Zpravodaj";



export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zpravodaj" element={<Zpravodaj />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}
