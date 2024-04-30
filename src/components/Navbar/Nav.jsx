import { Link } from "react-router-dom";
import "./Nav.css";

export default function () {
  return (
    <>
    <nav className="navbar">
      <h3 className="nav-logo">logo</h3>

      <ul className="nav-links">
        <Link to={"/"}><li>Home</li></Link>
        <Link to={"/uredni"}><li>Úřední</li></Link>
        <Link to={"/obec"}><li>Obec</li></Link>
        <Link to={"/zpravodaj"}><li>Zpravodaj</li></Link>
        <Link to={"/dokumenty"}><li>Dokumenty</li></Link>
      </ul>
    </nav>
    </>
  )
}
