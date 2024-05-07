import "./MainSection.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
export default function MainSection() {
  return (
    <>
      <div className="main-section-container">
        <h1 className="main-title">Obec Libeznice</h1>
        <p className="podnadpis">Společně pro naši budoucnost</p>
        <Button variant="outlined"  style={{color: 'white', borderColor: 'white'}}>Novínky</Button>
      </div>
    </>
  );
}
