import BbqItem from "./BbqItem";
import bbqs from "../bbqs.js";
import { ListWrapper } from "../styles";

const BbqList = () => {
  const bbqList = bbqs.map((bbq) => <BbqItem bbqobject={bbq} />);

  return <ListWrapper>{bbqList}</ListWrapper>;
};
export default BbqList;
