import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
export default function InfoCard() {
  return (
    <>
      <Card sx={{ maxWidth: 1100, height: 1080, marginBottom: 5 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="220"
          image="src\assets\img\libezice3.jpeg"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h4"
            component="div"
            sx={{ textAlign: "center" }}
          >
            Libeznice
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p>
              Libeznice je obec ležící ve Středočeském kraji, zhruba 10
              kilometrů severně od centra Prahy. Svojí polohou a atmosférou
              nabízí ideální kombinaci klidného venkovského života s dostupností
              hlavního města. Obec má bohatou historii, přátelskou komunitu a
              stále se rozvíjející infrastrukturu.
            </p>
            <h3>Historie a vznik</h3>
            <p>
              Historie Libeznic sahá až do středověku. První písemná zmínka o
              obci pochází z roku 1233. V průběhu staletí prošla obec mnoha
              změnami, od zemědělské vesnice až po dnešní moderní obec.
              Historické památky, jako je kostel sv. Vojtěcha, připomínají
              bohatou minulost a kulturní dědictví obce.
            </p>
            <h3>Současnost a rozvoj</h3>
            <p>
              Dnes je Libeznice moderní obcí, která stále roste a rozvíjí se.
              Obec má přes 2 000 obyvatel a nabízí širokou škálu služeb a
              aktivit. K dispozici jsou mateřské a základní školy, sportovní
              areály, kulturní centrum a mnoho dalšího. Obec se také zaměřuje na
              udržitelný rozvoj a zlepšování životního prostředí.
            </p>
            <h3>Vybavenost a služby</h3>
            <p>
              V Libeznicích najdete řadu obchodů, restaurací a dalších služeb,
              které zajišťují pohodlný život místních obyvatel. Díky své poloze
              je obec dobře dostupná jak autem, tak veřejnou dopravou, což
              usnadňuje dojíždění do Prahy i dalších okolních měst.
            </p>
            <h3>Komunitní život</h3>
            <p>
              Libeznice je známá svou aktivní komunitou a bohatým společenským
              životem. Po celý rok se zde konají různé kulturní a sportovní
              akce, které posilují místní komunitu a vytvářejí příležitosti pro
              setkávání a spolupráci. Místní spolky a organizace jsou aktivně
              zapojeny do rozvoje obce a organizace různých akcí.
            </p>
            <h3>Příroda a volný čas</h3>
            <p>
              Okolí Libeznic nabízí krásnou přírodu a mnoho možností pro
              volnočasové aktivity. Přírodní rezervace, turistické stezky a
              cyklostezky lákají k procházkám a výletům do okolí. Blízkost
              přírody a zelených ploch přispívá k vysoké kvalitě života v obci.
            </p>
            <h3>Příroda a volný čas</h3>
            <p>
              <h3>Budoucnost</h3>
              <p>
                Obec Libeznice má ambiciózní plány do budoucna. Prioritou je
                další rozvoj infrastruktury, zlepšování kvality služeb a podpora
                udržitelného rozvoje. Důraz je kladen na vytváření přátelského a
                bezpečného prostředí pro všechny obyvatele, včetně mladých
                rodin, seniorů i nově příchozích. Libeznice je skvělým místem
                pro život díky své bohaté historii, aktivní komunitě a
                neustálému rozvoji. Svojí ideální polohou a širokou nabídkou
                služeb nabízí to nejlepší z venkovského života s výhodami
                blízkosti velkoměsta.
              </p>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
