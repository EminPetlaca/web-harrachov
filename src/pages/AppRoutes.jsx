import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Zpravodaj from "./Zpravodaj/Zpravodaj";
import Kontakty from "./Kontakty/Kontakty";



export default function AppRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/zpravodaj" element={<Zpravodaj />} />
          <Route path="/kontakty" element={<Kontakty />} />
      
        </Routes>
      </BrowserRouter>
    </>
  );
}
