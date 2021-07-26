import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: "50px",
    width: "100%",
    maxWidth: 180,
    backgroundColor: "#404843",
    color: "white",
    display: "flex",
    flexFlow: "column",
  },
  nested: {
    width: "180px",
  },
  color: {
    backgroundColor: "#404843",
    color: "white",
    textDecoration: "none",
    // fontSize: "14px",
  },
}));

export default function Dropdown() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      <ListItem button onClick={handleClick}>
        <ListItemText primary="COVID STATS" className={classes.color} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit onClose={handleClose}>
        <List className={classes.color} component="div" disablePadding>
          <Link to="/Covid" className={classes.color}>
            <ListItem button className={classes.nested} onClick={handleClose}>
              <ListItemText primary="World" />
            </ListItem>
          </Link>
          <Link to="/India" className={classes.color}>
            <ListItem
              button
              className={classes.nested + classes.color}
              // className={classes.color}
              onClick={handleClose}
            >
              <ListItemText primary="India" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
    </List>
  );
}
