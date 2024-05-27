import "../DropDowns/ObecDrop.css";
import { Link } from "react-router-dom";

export default function ObecDrop(props) {
  return (
    <>
      {/* drop down of link "Obec" */}
      <div className="drop-container">
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/verejne-vyhlasky">
              Stavební úřad
            </Link>
          </li>
          <li>
            <Link className="link" to="/pozvanky">
              Matrika
            </Link>
          </li>
          <li>
            <Link className="link" to="/zapisy">
              Czechpoint
            </Link>
          </li>
          <li>
            <Link className="link" to="/zpravodaj">
              Evidence Obyvatel
            </Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/vystava-kvetin">
              Legalizace a vidimace
            </Link>
          </li>
          <li>
            <Link className="link" to="/pronajem-kurtu">
              Poplatky
            </Link>
          </li>
          <li>
            <Link className="link" to="/seznam-podnikatelu">
              Povinně zveřejňované informace
            </Link>
          </li>
          <li>
            <Link className="link" to="/jizdni-rady">
              Soubory ke stažení
            </Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/sbor-dobrovolnych-hasicu">
            Často kladené otázky
            </Link>
          </li>
          <li>
            <Link className="link" to="/zajmova-sdruzeni">
            E-podatelna
            </Link>
          </li>
          <li>
            <Link className="link" to="/turistika-sluzby">
            Úřední deska
            </Link>
          </li>
          <li>
            <Link className="link" to="/sport">
            Pro rychlý internet
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
