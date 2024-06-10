import React from 'react'
import "./MainNewsSection.css"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MainNewsSection() {
    return (
        <>
            <div className="news-container">
                <div className="news-title">
                    <h1>Novinky z Líbeznic</h1>
                </div>
                <div className="news-articles">
                    <div className="news-row">
                        <Card sx={{ maxWidth: 700, height: 638.5 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="src\assets\img\libeznice-4-4.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" sx={{ textAlign: "center" }}>
                                    Nový Kulturní Dům v Líbeznicích Otevírá Své Dveře
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Obec Líbeznice slavnostně otevřela nový kulturní dům, který nabídne moderní zázemí pro místní akce, koncerty a společenské události. Moderní stavba je vybavena špičkovým audiovizuálním zařízením a pohodlným zázemím pro návštěvníky. Nový kulturní dům bude také hostit různé workshopy, výstavy a přednášky, čímž se stane centrem kulturního života obce. Starosta při zahajovací řeči zdůraznil význam kulturního domu pro komunitní život a poděkoval všem, kteří se na projektu podíleli.

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <div className="news-help">
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="src\assets\img\celkovy-pohled-libeznice.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Líbeznice Se Pyšní Ekologickým Projektem na Čistou Energii

                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Líbeznice spustily projekt zaměřený na využití obnovitelných zdrojů energie, který zahrnuje instalaci solárních panelů na veřejné budovy, jako jsou školy a obecní úřad. Tento krok je součástí širší iniciativy obce stát se ekologičtějším a udržitelnějším místem k životu. Projekt byl financován z evropských fondů a místních zdrojů. Očekává se, že díky solárním panelům se ročně ušetří značné množství energie a sníží se emise CO2. Obyvatelé obce tento krok vítají a mnozí z nich plánují instalaci solárních panelů i na své domy.
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="src\assets\img\libeznice-pic2.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Nový Park v Líbeznicích: Oáza Klidu pro Místní Obyvatele
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        V Líbeznicích byl otevřen nový park, který nabízí prostor pro relaxaci, dětská hřiště a sportovní aktivity. Park je vybaven moderními herními prvky, venkovními fitness stroji a klidovými zónami s lavičkami a zelení. Místní obyvatelé mohou využít také piknikové zóny a cyklostezky. Při slavnostním otevření parku se konala řada aktivit pro děti i dospělé, včetně sportovních turnajů a tvořivých dílen. Nový park je vítaným přírůstkem do komunitní infrastruktury, který podporuje zdravý životní styl a poskytuje prostor pro setkávání sousedů.
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </div>
                    </div>
                    <div className="news-row">
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="src\assets\img\libeznice-pic1.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Líbeznické Školy Podporují Moderní Vzdělávání
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Místní základní a mateřská škola v Líbeznicích představily nové vzdělávací programy zaměřené na inovace a digitální dovednosti. Žáci nyní mají přístup k moderním technologiím, jako jsou tablety a interaktivní tabule, a učitelé jsou vyškoleni v metodách, které podporují kritické myšlení a spolupráci. Nové programy také zahrnují rozšířenou výuku cizích jazyků a praktických dovedností. Rodiče i pedagogové oceňují, že tyto změny připraví děti lépe na budoucnost a zvýší jejich konkurenceschopnost na trhu práce.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="src\assets\img\libezice3.jpeg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Líbeznice Podpořily Lokální Umělce Novým Projektem
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Obec zahájila nový projekt na podporu lokálních umělců, který zahrnuje výstavy, workshopy a kulturní akce. Cílem projektu je zvýšit povědomí o místních talentech a poskytnout jim platformu pro prezentaci jejich práce. První výstava, která byla v rámci projektu otevřena, představila díla mladých umělců z Líbeznic a okolí. Workshopů se zúčastnilo mnoho zájemců, kteří měli možnost seznámit se s různými technikami a postupy pod vedením zkušených lektorů. Projekt se setkal s pozitivními ohlasy a plánují se další aktivity na podporu umění v obci.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="src\assets\img\libeznice-sport.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Tradiční Líbeznický Jarmark Přilákal Rekordní Počet Návštěvníků
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Oblíbený líbeznický jarmark, který se koná každoročně, přilákal letos rekordní počet návštěvníků z blízkého i vzdálenějšího okolí. Stánky byly plné lokálních výrobků, tradičních řemesel a domácích specialit. Návštěvníci mohli ochutnat místní delikatesy, nakoupit ručně vyráběné dekorace a zúčastnit se různých soutěží a představení. Organizátoři jarmarku připravili bohatý doprovodný program, včetně živé hudby a tanečních vystoupení. Tento ročník jarmarku potvrdil, že jde o jednu z nejdůležitějších a nejoblíbenějších událostí v kalendáři obce.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}
