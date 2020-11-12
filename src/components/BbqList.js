import bbqs from "../bbqs.js";
import { useState } from "react";

// Stayles
import { ListWrapper } from "../styles";
// Comopnents
import BbqItem from "./BbqItem";
import SearchBar from "./SearchBar";

const BbqList = (props) => {
  const [query, setQuery] = useState("");
  const [_bbqs, setBbqs] = useState(bbqs);

  const deleteBbq = (bbqId) => {
    const updatedBbqs = _bbqs.filter((bbq) => bbq.id !== bbqId);
    setBbqs(updatedBbqs);
  };

  const filteredBbqs = _bbqs.filter((bbq) =>
    bbq.name.toLowerCase().includes(query.toLowerCase())
  );
  const bbqList = filteredBbqs.map((bbq) => (
    <BbqItem
      bbq={bbq}
      key={bbq.id}
      setBbq={props.setBbq}
      deleteBbq={deleteBbq}
    />
  ));
  return (
    <div className="container">
      <SearchBar setQuery={setQuery} />

      <ListWrapper className="row">{bbqList}</ListWrapper>
    </div>
  );
};

export default BbqList;
