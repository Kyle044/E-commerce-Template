import React, { useState } from "react";
import "../Css/Nav.css";
import { Link, withRouter } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import useWindowDimensions from "../Functions/getDimension";
import MenuIcon from "@material-ui/icons/Menu";
function Nav({ history }) {
  const { height, width } = useWindowDimensions();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="ParentDiv">
      <h1
        className="cursor-pointer slec"
        onClick={() => {
          history.push("/");
        }}
      >
        E - Commerce
      </h1>
      {width >= 800 ? (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      ) : (
        <div>
          <MenuIcon className="burger" onClick={handleClick} on />
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/">
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link to="/About">
              <MenuItem onClick={handleClose}>About</MenuItem>
            </Link>
            <Link to="/Contact">
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </Link>
          </Menu>
        </div>
      )}
    </div>
  );
}

export default withRouter(Nav);
