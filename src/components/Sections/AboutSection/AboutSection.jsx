import "./AboutSection.css";

export default function AboutSection() {
  return (
    <>
      <div className="about-section-container">
        <div className="about-container">
          <img
            className="news-img"
            src="src\assets\img\celkovy-pohled-libeznice.jpg"
            alt=""
          />
          <div className="about-text">
            <h1>O Libezicích</h1>
            <p>
              Libeznice je malá, ale kouzelná obec nacházející se v blízkosti
              Prahy, hlavního města České republiky. Tato vesnice, která je
              součástí Středočeského kraje, nabízí klidné prostředí a bohatou
              historii.
            </p>
          </div>
        </div>
        <div className="about-container">
          <div className="about-text-left">
            <h1>Příroda a turistika</h1>
            <p>
              Libeznice je obklopena malebnou krajinou, která je ideální pro
              pěší turistiku a cykloturistiku. Nedaleké lesy a louky nabízejí
              skvělé možnosti pro relaxaci a rekreaci. Oblast je také bohatá na
              různé druhy rostlin a živočichů, což z ní činí atraktivní místo
              pro milovníky přírody.
            </p>
          </div>
          <img
            className="news-img"
            src="src\assets\img\libezice3.jpeg"
            alt=""
          />
        </div>
        <div className="about-container">
          <img
            className="news-img"
            src="src\assets\img\libeznice-4-4.jpg"
            alt=""
          />
          <div className="about-text">
            <h1>Současný život</h1>
            <p>
              V Libeznicích panuje přátelská a komunitní atmosféra. Obyvatelé
              mohou využívat moderní infrastrukturu včetně škol, sportovišť a
              zdravotnických zařízení. Obec se také aktivně podílí na podpoře
              místního podnikání a nabízí různé příležitosti pro rozvoj a
              inovace.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
