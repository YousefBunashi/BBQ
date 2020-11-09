import bbqs from "../bbqs";
import { BbqWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const BbqItem = (props) => {
  const bbq = props.bbq;

  return (
    <BbqWrapper>
      <img src={bbq.image} alt={bbq.name} onClick={() => props.setBbq(bbq)} />
      <p>{bbq.name}</p>
      <p className="bbq-price">{bbq.price} KD</p>
      <DeleteButton deleteBbq={props.deleteBbq} bbqId={bbq.id} />
    </BbqWrapper>
  );
};
export default BbqItem;
