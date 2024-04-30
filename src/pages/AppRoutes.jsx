import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Obec from "./Obec";
import Uredni from "./Uredni";
import Zpravodaj from "./Zpravodaj";
import Dokumenty from "./Dokumenty";

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
