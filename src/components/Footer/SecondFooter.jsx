import "./SecondFooter.css";
import { Link } from "react-router-dom";

export default function SecondFooter() {
  return (
    <>
      <div className="second-footer-container">
        <p className="second-footer-text">
          Copyright © Obecní úřad Líbeznice. <br />
          Licence Creative Commons Uvedená
          práce (dílo) podléhá licenci Creative Commons Uveďte
          autora-Nevyužívejte dílo komerčně-Zachovejte licenci 3.0 Česko
        </p>

        <Link className="second-footer-link">Emin, Šimon SPSMB</Link>
      </div>
    </>
  );
}
