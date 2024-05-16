import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <>
      <hr />
      <div className="footer-container">
        <div className="footer-informace footer-block">
          <h2>Informace pro vás:</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            officiis quis quia animi molestias ratione consectetur veritatis,
            dolor, veniam eos sequi quaerat sit sed inventore esse molestiae
            fugit nihil ea?
          </p>
        </div>
        <ul className="footer-block">
        <h2>Důležité odkazy:</h2>
          <Link to="/">
            <li>Obec</li>
          </Link>
          <Link to="/uredni">
            <li>Obecní úřad</li>
          </Link>
          <Link to="/">
            <li>Samospráva obce</li>
          </Link>
          <Link to="/">
            <li>Služby pro občany</li>
          </Link>
          <Link to="/">
            <li>klutura a volný čas</li>
          </Link>
        </ul>
        <ul className="footer-block">
        <h2>Důležité kontakty: </h2>
          <li>e-mail: obec@libeznice.cz</li>
          <li>e-mail: stav.urad@libeznice.cz</li>
          <li>tel/fax</li>
          <li>adresa uradu</li>
        </ul>
      </div>
    </>
  );
}
