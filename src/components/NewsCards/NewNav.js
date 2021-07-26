import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dropdown from "./Covid/Dropdown";
import { Link } from "react-router-dom";
import NewDropDown from "./Covid/NewDropDown";
import "./app.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "70px",
    
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  title: {
    flexGrow: 1,
  },
  color: {
    color: "white",
    backgroundColor : "#404843",
    textDecoration: "none",
  },
  height: {
    maxHeight: "100px",
  },
}));

export default function NewNav() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.height}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.color}>
            AINews
            </Link>
          </Typography>
          {isMobile ? (
            <>
              <Link to="/" className={classes.color}>
                <Button className={classes.color}>Home</Button>
              </Link>
              <Dropdown />
              {/* <NewDropDown /> */}
              <Link to="/Chat" className={classes.color}>
                <Button className={classes.color}>Chat</Button>
              </Link>
              {/* <Button className={classes.color}>
                {" "}
                <a className={classes.color} href="http://127.0.0.1:5000/">
                  Fact Checker
                </a>
              </Button> */}
              <Link to="/AboutUs" className={classes.color}>
                <Button className={classes.color}>Contact</Button>
              </Link>

              {/* <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton> */}
            </>
          ) : (
            <>
              <NewDropDown />
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
