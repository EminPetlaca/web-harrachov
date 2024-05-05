import "./ObecDrop.css";
import { Link } from "react-router-dom";


export default function ObecDrop() {

  return (
    <>
        {/* drop down of link "Obec" */}
    <div className="drop-container">
    <ul className="drop-menu">
        <li><Link to="/verejne-vyhlasky">Veřejné vyhlášky</Link></li>
        <li><Link to="/pozvanky">Pozvánky na jednání zastupitelstva</Link></li>
        <li><Link to="/zapisy">Zasedání zastupitelstva obce</Link></li>
        <li><Link to="/zpravodaj">Čimelický zpravodaj</Link></li>
      </ul>
      <ul className="drop-menu">
        <li><Link to="/vystava-kvetin">Výstava květin Čimelice</Link></li>
        <li><Link to="/pronajem-kurtu">Pronájem kurtů a tělocvičny</Link></li>
        <li><Link to="/seznam-podnikatelu">Seznam podnikatelů a služeb</Link></li>
        <li><Link to="/jizdni-rady">Jízdní řady</Link></li>
      </ul>
      <ul className="drop-menu">
        <li><Link to="/sbor-dobrovolnych-hasicu">Dobrovolný hasiči Čimelice</Link></li>
        <li><Link to="/zajmova-sdruzeni">Zajmová sdružení pro volný čas</Link></li>
        <li><Link to="/turistika-sluzby">Turistika, zajímavosti a služby</Link></li>
        <li><Link to="/sport">Sport</Link></li>
      </ul>
      <ul className="drop-menu">
        <li><Link to="/dobrovolny-svazek">Dobrovolný svazek Písecka</Link></li>
        <li><Link to="/dokumenty-sorp">Dokumenty SORP</Link></li>
        <li><Link to="/mapovy-portal">Náš mapový portál</Link></li>
        <li><Link to="/verejna-sprava">Portál veřejné správy</Link></li>
      </ul>



    </div>

    </>
  )
}
