import React from "react";
import { NavLink } from "react-router-dom";
import { SubNavDiv } from "../styles/styles";

function SubNav(props) {
  return (
    <SubNavDiv>
      {!props.navInfo
        ? null
        : props.navInfo[1].map((value, index) => (
            <NavLink
              className="subnav-links"
              to={`${value.split(" ").join("")}`}
            >{`${value}`}</NavLink>
          ))}
    </SubNavDiv>
  );
}

export default SubNav;
