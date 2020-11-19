import BbqList from "./components/BbqList";
import { GlobleStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import BbqDetail from "./components/BbqDetail";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import bbqs from "./bbqs";

import NavBar from "./components/NavBar";
// import slugify from "react-slugify";
// import bbqStore from "./stores/bbqStore";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
  dark: {
    mainColor: "#papayawhip", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
    red: "#ff3232",
  },
};

function App() {
  const [currentTheme, setCurrentTheme] = useState("light");
  const [_bbqs, setBbqs] = useState(bbqs);

  // newBbq.id = _bbqs[_bbqs.length - 1].id + 1;
  // newBbq.slug = slugify(newBbq.name);

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobleStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />

      <Switch>
        <Route path="/bbqs/:bbqSlug">
          <BbqDetail />;
        </Route>
        <Route path="/bbqs">
          <BbqList />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
