// import bbqs from "../bbqs";
import { BbqWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const BbqItem = (props) => {
  const bbq = props.bbq;

  return (
    <BbqWrapper>
      <Link to={`/bbqs/${bbq.slug}`}>
        <img src={bbq.image} alt={bbq.name} />
      </Link>

      <p>{bbq.name}</p>
      <p className="bbq-price">{bbq.price} KD</p>
      <DeleteButton deleteBbq={props.deleteBbq} bbqId={bbq.id} />
    </BbqWrapper>
  );
};
export default BbqItem;
