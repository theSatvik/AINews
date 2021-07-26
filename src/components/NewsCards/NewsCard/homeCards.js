import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./homeCards.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "20px",
  },
  media: {
    height: 300,
  },
  pos: {},
});

export default function Cards() {
  const classes = useStyles();

  return (
    <div className="card__pos">
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.freepik.com/free-vector/questions-concept-illustration_114360-1523.jpg"
            title="How to Use"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center>How To Use AINews</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Press the microphone button and ask for News
              <br></br>
              <br></br>
              <br></br>
              Try Saying: "Give me Some News"
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.freepik.com/free-vector/infodemic-news-illustration_52683-49401.jpg"
            title="Categories"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center>Search By Categories</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Categories: Bussiness, Entertianment, General, Health, Science,
              Sports, Technology.
              <br></br>
              <br></br>
              <br></br>
              Try Saying: Give me the latest Entertainment News.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.freepik.com/free-vector/people-using-their-mobile-phones-news_52683-39976.jpg"
            title="Terms"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center>Search By Terms</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Terms: IOS, Android, Playstation 5, Donald Trump, Bitcoin etc...
              <br></br>
              <br></br>
              <br></br>
              Try Saying: What's up with IOS.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://image.freepik.com/free-vector/noisy-big-megaphone_74855-7630.jpg"
            title="Sources"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <center>Search By Sources</center>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Sources: Wired, CNN, BBC News, Buzzfeed...
              <br></br>
              <br></br>
              <br></br>
              Try Saying: Give me news from CNN.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
