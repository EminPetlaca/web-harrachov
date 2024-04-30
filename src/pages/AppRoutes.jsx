import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Obec from "./Obec/Obec";
import Uredni from "./Uredni/Uredni";
import Zpravodaj from "./Zpravodaj/Zpravodaj";
import Dokumenty from "./Documents/Documents";

export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uredni" element={<Uredni />} />
          <Route path="/obec" element={<Obec />} />
          <Route path="/zpravodaj" element={<Zpravodaj />} />
          <Route path="/dokumenty" element={<Dokumenty />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
