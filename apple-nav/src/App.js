import React, { useState } from "react";
import { Route } from "react-router-dom";
import NavWrapper from "./components/NavWrapper";
import Home from "./components/Home";
import { NavInfo } from "./data/data";
import { ContentDiv } from "./styles/styles";
import "./App.css";

function App() {
  const [navInfo] = useState(NavInfo);
  // console.log(Object.values(navInfo));
  return (
    <div>
      {navInfo ? <NavWrapper navInfo={navInfo} /> : <div>"Loading..."</div>}

      <Route exact path="/" render={() => <ContentDiv>Home</ContentDiv>} />

      {navInfo
        ? Object.keys(navInfo).map((key, index) => {
            return Object.values(navInfo)[index].map((value, index2) => {
              console.log(`/${key}/${value.split(" ").join("")}`);
              return (
                <Route
                  key={`${index} + ${index2}`}
                  exact
                  path={`/${key}/${value.split(" ").join("")}`}
                  render={() => <ContentDiv>{value}</ContentDiv>}
                />
              );
            });
          })
        : null}

      <Route path="/Support" render={() => <ContentDiv>Support</ContentDiv>} />
    </div>
  );
}

export default App;
