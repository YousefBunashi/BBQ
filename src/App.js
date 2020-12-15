import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Routes from "./Routes";
import { observer } from "mobx-react";
import butcheryStore from "./stores/butcheryStore";
import bbqsStore from "./stores/bbqStore";

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

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");
  };

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <NavBar currentTheme={currentTheme} toggleTheme={toggleTheme} />
      {butcheryStore.loading || bbqsStore.loading ? (
        <h1>Loadinggg</h1>
      ) : (
        <Routes />
      )}
    </ThemeProvider>
  );
}
export default observer(App);
