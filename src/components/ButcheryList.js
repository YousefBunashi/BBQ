// import butcherys from "../butcherys.js";
import { useState } from "react";
import butcheryStore from "../stores/butcheryStore";
import { observer } from "mobx-react";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import ButcheryItem from "./ButcheryItem";
import SearchBar from "./SearchBar";

const ButcheryList = () => {
  const [query, setQuery] = useState("");

  const butcheryList = butcheryStore.Butcheries.filter((butchery) =>
    butchery.name.toLowerCase().includes(query.toLowerCase())
  ).map((butchery) => <ButcheryItem butchery={butchery} key={butchery.id} />);

  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />

      <ListWrapper className="row">{butcheryList}</ListWrapper>
    </div>
  );
};

export default observer(ButcheryList);
