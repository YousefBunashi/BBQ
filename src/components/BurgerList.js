// import burgers from "../burgers.js";
import { useState } from "react";
import burgersStore from "../stores/burgerStore";
import { observer } from "mobx-react";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import BurgerItem from "./BurgerItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const BurgerList = () => {
  const [query, setQuery] = useState("");

  const filteredBurgers = burgersStore.burgers.filter((burger) =>
    burger.name.toLowerCase().includes(query.toLowerCase())
  );
  const burgerList = filteredBurgers.map((burger) => (
    <BurgerItem burger={burger} key={burger.id} />
  ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper className="row">{burgerList}</ListWrapper>
    </div>
  );
};

export default observer(BurgerList);
