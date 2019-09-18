import React from "react";
import { NavLink } from "react-router-dom";

function Nav(props) {
  return (
    <NavLink
      className="nav-links"
      to={`/${props.navInfo}/`}
    >{`${props.navInfo}`}</NavLink>
  );
}

export default Nav;
