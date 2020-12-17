// Styles
import { Title } from "../styles";
import { useState } from "react";

// Components
import ButcheryItem from "./ButcheryItem";

// Stores
import butcheryStore from "../stores/butcheryStore";
import SearchBar from "./SearchBar";
import { observer } from "mobx-react";

const ButcheryList = () => {
  const [query, setQuery] = useState("");

  const butcheryList = butcheryStore.butcheries
    .filter((butchery) =>
      butchery.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((butchery) => <ButcheryItem butchery={butchery} key={butchery.id} />);

  return (
    <div className="container">
      <Title>Butcheries</Title>
      <SearchBar setQuery={setQuery} />
      {butcheryList}
    </div>
  );
};

export default observer(ButcheryList);
