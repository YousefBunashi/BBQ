// import bbqs from "../bbqs.js";
import { useState } from "react";
import bbqsStore from "../stores/bbqStore";
import { observer } from "mobx-react";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import BbqItem from "./BbqItem";
import SearchBar from "./SearchBar";
import AddButton from "./buttons/AddButton";

const BbqList = (props) => {
  const [query, setQuery] = useState("");

  const filteredBbqs = bbqsStore.bbqs.filter((bbq) =>
    bbq.name.toLowerCase().includes(query.toLowerCase())
  );
  const bbqList = filteredBbqs.map((bbq) => (
    <BbqItem bbq={bbq} key={bbq.id} setBbq={props.Bbq} />
  ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />
      <AddButton />
      <ListWrapper className="row">{bbqList}</ListWrapper>
    </div>
  );
};

export default observer(BbqList);
