import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import InterviewMe from '../../assets/InterviewMe.png';

export default function MultiActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        {/* <CardMedia
          component="img"
          height="140"
          width=""
          image={InterviewMe}
          alt="green iguana"
          
        /> */}
        <div style={{display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
            <div>
                <img src={InterviewMe} alt="InterviewMe"
                style={{height:"100px", width:"130px",  borderRadius:"20px",margin:"10px 0px 0px 20px "}} />
            </div>
            <div  style={{margin:"10px 60px 0px 20px "}}>
                <Typography gutterBottom variant="h5" component="div">
                Lizard
            </Typography>
            </div>
        </div>

        
        <CardContent>
        
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'end'}}>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Typography> updated 2 hours ago</Typography>
      </CardActions>
    </Card>
  );
}

