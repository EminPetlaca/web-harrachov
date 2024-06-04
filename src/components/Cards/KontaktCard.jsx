import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import  CardMedia  from "@mui/material/CardMedia";

export default function KontaktCard(props) {
  return (
    <>
      <Card sx={{ minWidth: 350, minheight: 150, display: "flex", flexDirection: "row", maxWidth: 350,  }}>
      <CardMedia
        sx={{ height: 140, width: 150, float:"right"}}
        image="../../src/assets/img/avatar.png"
        title="green iguana"
      />
        <CardContent>
          <Typography variant="h5" component="div">
            {props.name}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.function}
          </Typography>

          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {props.number}
          </Typography>
          <Typography variant="body2">
            {props.mail}
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
