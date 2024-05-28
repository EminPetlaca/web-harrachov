import "./ZnakSection.css";

export default function ZnakSection() {
  return (
    <div className="znak-section-container">
      <div className="znak-text-container">
        <img
          src="src/assets/img/Cimelice_logo.png"
          alt="Cimelice Logo"
          className="znak-img"
        />
        <div className="znak-text">
          <h1 className="znak-title">Základní informace</h1>
          <p>
            Středověké jádro Líbeznic leželo v místě, nyní nazývaném Na Hůrce.
            Obrysy původní návsi zůstaly dodnes patrné. Přes obec vedla jedna z
            vedlejších obchodních cest, která odbočovala od stezky směřující do
            kraje Litoměřiců, pravděpodobně v blízkosti dnešních Zdib,
            procházela přes bořanovický háj, Pakoměřice, vyúsťovala v
            Líbeznících a pokračovala směrem severním na Mělnicko. Líbeznice se
            staly pro svou polohu, kostel i školu centrem blízkého okolí, což
            trvá dodnes.
          </p>
        </div>
      </div>

      <div className="znak-text-container">
        <ul className="znak-list">
          <h1 className="znak-list-title">V obci je:</h1>
          <li>základní škola</li>
          <li>mateřská škola</li>
          <li>
            budova zdravotního střediska se dvěma obvody, <br />
            dětským střediskem, zubním střediskem s laboratoří
          </li>
          <li>oční optika s pravidelnými návštěvami lékaře</li>
          <li>obecní knihovna</li>
          <li>pošta</li>
        </ul>
        <img
          src="src/assets/img/libeznice-pic2.jpg"
          alt="Libeznice"
          className="znak-img"
        />
      </div>
    </div>
  );
}
