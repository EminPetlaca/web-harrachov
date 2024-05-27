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
                                image="src\assets\img\celkovy-pohled-libeznice.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h4" component="div" sx={{textAlign: "center"}}>
                                    Novinky
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica  Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
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
                                        Novinka
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Novinkys are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image="src\assets\img\celkovy-pohled-libeznice.jpg"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        Novinky
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Novinkys are a widespread group of squamate reptiles, with over 6,000
                                        species, ranging across all continents except Antarctica
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Share</Button>
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
                                image="src\assets\img\celkovy-pohled-libeznice.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Novinky
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="src\assets\img\celkovy-pohled-libeznice.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Novinky
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image="src\assets\img\celkovy-pohled-libeznice.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Novinky
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Novinkys are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Share</Button>
                                <Button size="small">Learn More</Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>

            </div>
        </>
    )
}
