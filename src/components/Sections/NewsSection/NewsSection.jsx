import React from 'react'
import './NewsSection.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import shadows from '@mui/material/styles/shadows';
export default function NewsSection() {
    return (
        <>

            <h1 className='aktuality-nadpis'><Link to="/zpravodaj">Aktuality↓</Link></h1>
            
            <div className="news-container">

                <Card className='aktuality-card' sx={{ maxWidth: 300, boxShadow: 3 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\img\cimelice-pic2.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card className='aktuality-card' sx={{ maxWidth: 300, boxShadow: 3  }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\img\cimelice-pic2.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Card className='aktuality-card' sx={{ maxWidth: 300, boxShadow: 3  }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="src\assets\img\cimelice-pic2.jpg"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Lizard
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </div>
        </>
    )
}
