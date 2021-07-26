import React from "react";
import "./app.css";
import { Link } from "react-router-dom";
import Dropdown from "./Covid/Dropdown";

function Nav() {
  return (
    <nav>
      <h3>AINews</h3>
      <ul className="navLinks">
        <li>
          <Link className="Links" to="/">
            Home
          </Link>
        </li>
        {/* <li>
          <Link className="Links" to="Covid">
            Coronovirus
          </Link>

          <ul>
            <li>
              <Link className="Links" to="Covid">
                World
              </Link>
            </li>
            <li>India</li>
          </ul>
          
        </li> */}
        <Dropdown />
        <li>
          <Link className="Links" to="Contact">
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
