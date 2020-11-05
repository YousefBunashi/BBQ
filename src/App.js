import BbqList from "./components/BbqList";
import { GlobleStyle, Title, Description, ShopImage } from "./styles";
import { ThemeProvider } from "styled-components";

const theme = {
  mainColor: "#242424", // main font color
  backgroundColor: "papayawhip", // main background color
  pink: "#ff85a2",
};

function App() {
  let counter = 0;
  return (
    <ThemeProvider theme={theme}>
      <GlobleStyle />
      <div>
        <button>-1</button>
        {counter}
        <button onClick={() => alert("hello")}>+1</button>
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
