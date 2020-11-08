import BbqList from "./components/BbqList";
import {
  GlobleStyle,
  Title,
  ThemeButton,
  Description,
  ShopImage,
  // SearchBarStyled,
} from "./styles";
import { ThemeProvider } from "styled-components";
import React, { useState } from "react";

const theme = {
  light: {
    mainColor: "#242424", // main font color
    backgroundColor: "papayawhip", // main background color
    pink: "#ff85a2",
  },
  dark: {
    mainColor: "#papayawhip", // main font color
    backgroundColor: "#242424", // main background color
    pink: "#ff85a2",
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
      <GlobleStyle />

      <ThemeButton onClick={toggleTheme}>
        {currentTheme === "light" ? "Dark" : "Light"} Mode
      </ThemeButton>
      <div>
        <Title>Second Best Burger in Town</Title>
        <Description>More than Burgers</Description>
        <ShopImage
          alt="BBQ SHOP"
          src="https://i.pinimg.com/originals/28/c4/38/28c4388c15cd76096a6401bc02a3d5d8.jpg"
        />
      </div>

      <BbqList />
    </ThemeProvider>
  );
}

export default App;
