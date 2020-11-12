import BbqList from "./components/BbqList";
import { GlobleStyle } from "./styles";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";
import BbqDetail from "./components/BbqDetail";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import bbqs from "./bbqs";

import NavBar from "./components/NavBar";

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
  const deleteBbq = (bbqId) => {
    const updatedBbqs = _bbqs.filter((bbq) => bbq.id !== bbqId);
    setBbqs(updatedBbqs);
  };

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
          <BbqDetail bbqs={_bbqs} deleteBbq={deleteBbq} />;
        </Route>
        <Route path="/bbqs">
          <BbqList bbqs={_bbqs} deleteBbq={deleteBbq} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
