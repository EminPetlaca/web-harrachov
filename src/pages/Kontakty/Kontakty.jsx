import React from "react";
import Header from "../../components/Header/Header";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import KontaktCard from "../../components/Cards/KontaktCard";
import "./Kontakty.css";
export default function Kontakty() {
  return (
    <>
      <Header />
      <div className="contact-container">
        <div className="contact-container2">
        <KontaktCard
            className="contact-item"
            name="Jan Novák"
            function="Starosta"
            mail="jan.novak@example.cz"
            number="+420 731 123 456"
          />
          <KontaktCard
            className="contact-item"
            name="Petr Svoboda"
            function="Zástupce starosty"
            mail="petr.svoboda@example.cz"
            number="+420 732 234 567"
          />
          <KontaktCard
            className="contact-item"
            name="Alena Dvořáková"
            function="Tajemnice"
            mail="alena.dvorakova@example.cz"
            number="+420 733 345 678"
          />
          <KontaktCard
            className="contact-item"
            name="Lucie Králová"
            function="Vedoucí odboru"
            mail="lucie.kralova@example.cz"
            number="+420 734 456 789"
          />
          <KontaktCard
            className="contact-item"
            name="Milan Černý"
            function="Hlavní účetní"
            mail="milan.cerny@example.cz"
            number="+420 735 567 890"
          />
          <KontaktCard
            className="contact-item"
            name="Eva Malá"
            function="Referentka"
            mail="eva.mala@example.cz"
            number="+420 736 678 901"
          />
          
        </div>
      </div>
    </>
  );
}
