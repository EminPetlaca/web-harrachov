import React from "react";
import "./NewsSection.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import shadows from "@mui/material/styles/shadows";
export default function NewsSection() {
  return (
    <>
      <h1 className="aktuality-nadpis">
        <Link to="/zpravodaj">Aktuality↓</Link>
      </h1>

      <div className="news-container">
        <Card className="aktuality-card" sx={{ maxWidth: 300, boxShadow: 3 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="src\assets\img\skola_bast.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              ZÁKLADNÍ ŠKOLA V BAŠTI
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Vúterý 13.2. 2024 předali zástupci Svazku obcí Pod Beckovem
              oficiálně staveniště pro výstavbu svazkové základní školy v Bašti.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className="aktuality-card" sx={{ maxWidth: 300, boxShadow: 3 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="src\assets\img\libeznice-sport.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              SPORT LIBEZNICE
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Na multifunkčním hřišti v Areálu zdraví jsou nově nainstalované
              koše na basketbal. Můžete si zlepšt svoji techniku v hodu na koš
              nebo si třeba zahrát i na jeden koš.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <Card className="aktuality-card" sx={{ maxWidth: 300, boxShadow: 3 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="src\assets\img\libeznice-4-4.jpg"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DRÁŽDANY V LIBEZNICÍCH
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Veřejné setkání ohledně vysokorychlostní trati Praha - Drážďany,
              které se bude konat 27. května 2024 od 17:00 v hale Na Chrupavce.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>

      <div className="news-button-container">
        <Button className="news-button" variant="outlined">
          Všechny aktuality
        </Button>
      </div>
    </>
  );
}
