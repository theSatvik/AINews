import React from "react";
import NewsCard from "./NewsCard/NewsCard";
import { Grid, Grow, Typography } from "@material-ui/core";
import useStyles from "./styles.js";
import Fade from "react-reveal/Fade";
import Cards from "./NewsCard/homeCards";

const NewsCards = ({ articles, activeArticle }) => {
  const classes = useStyles();

  if (!articles.length) {
    return (
      // <Grow in>
      //     <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      //         <h1>DESCRIPTION</h1><br />
      //         <h1>FACT CHECKER</h1><br />
      //         <h1>COVID UPDATES</h1><br />
      //     </Grid>
      // </Grow>
      <div>
        <Fade top>
          <center>
            <h1>AINews</h1>
            <h1>Your Voice assistant</h1>
          </center>
        </Fade>
        <Fade top>
          <Cards />
        </Fade>
      </div>
    );
  }

  return (
    <Grow in>
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {articles.map((article, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} style={{ display: "flex" }}>
            <NewsCard article={article} activeArticle={activeArticle} i={i} />
          </Grid>
        ))}
      </Grid>
    </Grow>
  );
};

export default NewsCards;
