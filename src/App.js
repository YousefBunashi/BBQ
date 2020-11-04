import BbqList from "./components/BbqList";
import { ShopImage, Title, ListWrapper, BbqWrapper } from "./styles";

function App() {
  return (
    <div>
      <div>
        <Title>Second Best Burger in Town</Title>
        <ShopImage
          alt="BBQ SHOP"
          src="https://i.pinimg.com/originals/28/c4/38/28c4388c15cd76096a6401bc02a3d5d8.jpg"
        />
      </div>

      <div></div>
      <BbqList />
    </div>
  );
}

export default App;
