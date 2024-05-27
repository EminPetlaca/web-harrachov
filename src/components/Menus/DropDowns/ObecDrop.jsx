import "./ObecDrop.css";
import { Link } from "react-router-dom";


export default function ObecDrop(props) {
  return (
    <>
      {/* drop down of link "Obec" */}
      <div className="drop-container">

        <ul className="drop-menu">
          <li>
            <Link className="link" to="/verejne-vyhlasky">
              Základní informace
            </Link>
          </li>
          <li>
            <Link className="link" to="/pozvanky">
              Aktuality
            </Link>
          </li>
          <li>
            <Link className="link" to="/zapisy">
              Líbeznický zpravodaj
            </Link>
          </li>
          <li>
            <Link className="link" to="/zpravodaj">
              Hlášení rozhlasu
            </Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/vystava-kvetin">
              Ztracená a nalezená zvířata
            </Link>
          </li>
          <li>
            <Link className="link" to="/pronajem-kurtu">
              Pozvánky
            </Link>
          </li>
          <li>
            <Link className="link" to="/seznam-podnikatelu">
              Rozpočet
            </Link>
          </li>
          <li>
            <Link className="link" to="/jizdni-rady">
              Závěrečný účet obce
            </Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/sbor-dobrovolnych-hasicu">
              Veřejnoprávní smlouvy
            </Link>
          </li>
          <li>
            <Link className="link" to="/zajmova-sdruzeni">
            Výroční zprávy
            </Link>
          </li>
          <li>
            <Link className="link" to="/turistika-sluzby">
            Územní plán
            </Link>
          </li>
          <li>
            <Link className="link" to="/sport">
            Rozvoj obce
            </Link>
          </li>
        </ul>
        <ul className="drop-menu">
          <li>
            <Link className="link" to="/dobrovolny-svazek">
            Líbezné desatero
            </Link>
          </li>
          <li>
            <Link className="link" to="/dokumenty-sorp">
            Podpora EU, národní programy
            </Link>
          </li>
          <li>
            <Link className="link" to="/mapovy-portal">
            Připomínky občanů
            </Link>
          </li>
          <li>
            <Link className="link" to="/verejna-sprava">
            Právní předpisy obce
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
