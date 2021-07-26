import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  color: {
    color: "white",
  },
  LinkColor: {
    color: "black",
    textDecoration: "none",
  },
  margin: {
    marginTop: "10",
    backgroundColor: "black",
  },
}));

export default function NewDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const classes = useStyles();

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className={classes.color}
      >
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Button>
      <Menu
        // className={classes.margin}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <Link to="/" className={classes.LinkColor}>
          <MenuItem className={classes.LinkColor} onClick={handleClose}>
            Home
          </MenuItem>
        </Link>
        <Link to="/Covid" className={classes.LinkColor}>
          <MenuItem className={classes.LinkColor} onClick={handleClose}>
            World
          </MenuItem>
        </Link>
        <Link to="/India" className={classes.LinkColor}>
          <MenuItem onClick={handleClose}>India</MenuItem>
        </Link>
        <Link to="/Chat" className={classes.LinkColor}>
          <MenuItem onClick={handleClose}>Discussion Pannel</MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          <a className={classes.LinkColor} href="http://127.0.0.1:5000/">
            Fact Checker
          </a>
        </MenuItem>
        <Link to="/AboutUs" className={classes.LinkColor}>
          <MenuItem onClick={handleClose}>Contact us</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
{
  /* <a href="http://127.0.0.1:5000/">click here</a>; */
}
