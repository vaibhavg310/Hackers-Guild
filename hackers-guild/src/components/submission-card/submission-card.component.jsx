import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {checkImage} from '../detailed-card/detailed-card.component';

export const SubmissionCard = ({submission}) => {

  const {title, description, coverImage, hackathonStartDate} = submission;

  const timeSinceUpload = (hackathonStartDate) => {
    const uploadTime = new Date(hackathonStartDate);
    const currentTime = new Date();
    const timeDiff = currentTime - uploadTime;
  
    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    if(seconds < 60) {
      return ` uploaded ${seconds} seconds ago`;
    }
    else if(minutes < 60){
      return `uploaded ${minutes} seconds ago`;
    }
    
    else if(hours <24 ){
      return `uploaded ${hours} hours ago`;
    }
    else if(days < 7){
      return `uploaded ${days} days ago`;
    }
    else if(weeks < 4){
      return `uploaded ${weeks} weeks ago`;
    }
    else if(months < 12){
      return `uploaded ${months} months ago`;
    }
    else{
      return `uploaded ${years} years ago`;
    }
  }
   
  const navigate = useNavigate();

  const time = timeSinceUpload(hackathonStartDate);
  return (
    <Card sx={{ maxWidth:"400px", padding:"10px", minWidth:"400px"  }}>
      <CardActionArea onClick={() =>navigate(`/submissions/${submission.id}`) }>
        
        <div style={{display: 'flex', alignItems: 'center',justifyContent:'space-between'}}>
            <div>
                <img src={checkImage(coverImage)} alt="InterviewMe"
                style={{height:"100px", width:"130px",  borderRadius:"20px",margin:"10px 0px 0px 20px "}} />
            </div>
            <div  style={{margin:"10px 60px 0px 20px "}}>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
            </Typography>
            </div>
        </div>

        
        <CardContent>
        
          <Typography variant="body2" color="text.secondary" style={{height:"3em", maxHeight:"3em",
          overflow:"ellipsis",
          textOverflow:"ellipsis",
          display:"-webkit-box",
          WebkitLineClamp:2,
          WebkitBoxOrient:"vertical"}}>
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{justifyContent:'end'}}>
        {/* <Button size="small" color="primary">
          Share
        </Button> */}
        <Typography> {time}</Typography>
      </CardActions>
    </Card>
  );
}

export default SubmissionCard