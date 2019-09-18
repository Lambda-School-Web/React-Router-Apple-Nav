import React from "react";
import { Route, NavLink } from "react-router-dom";
import Nav from "./Nav";
import SubNav from "./SubNav";
import { NavDiv } from "../styles/styles";
function NavWrapper(props) {
  return (
    <>
      <NavDiv>
        <NavLink className="nav-links" to="/">
          Home
        </NavLink>
        {!props.navInfo ? (
          <div>Loading...</div>
        ) : (
          Object.keys(props.navInfo).map((value, index) => (
            <Nav key={index} navInfo={value} />
          ))
        )}
      </NavDiv>
      {!props.navInfo ? (
        <div>Loading...</div>
      ) : (
        Object.keys(props.navInfo).map((value, index) => (
          <Route
            key={index}
            path={`/${value}/`}
            render={() => (
              <SubNav
                key={index}
                navInfo={Object.entries(props.navInfo)[index]}
              />
            )}
          />
        ))
      )}
    </>
  );
}

export default NavWrapper;
