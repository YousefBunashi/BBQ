import bbqs from "../bbqs.js";
import { useState } from "react";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import BbqItem from "./BbqItem";
import SearchBar from "./SearchBar";

const BbqList = () => {
  const [query, setQuery] = useState("");
  const filteredBbqs = bbqs.filter((bbq) =>
    bbq.name.toLowerCase().includes(query.toLowerCase())
  );
  const bbqList = filteredBbqs.map((bbq) => (
    <BbqItem bbqobject={bbq} key={bbq.id} />
  ));
  return (
    <div>
      <SearchBar setQuery={setQuery} />

      <ListWrapper>{bbqList}</ListWrapper>
    </div>
  );
};

export default BbqList;
