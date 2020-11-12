// import bbqs from "../bbqs";
import { BbqWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

const BbqItem = ({ bbq, deleteBbq }) => {
  //   const bbq = props.bbq;
  // const { bbq } = props;

  return (
    <BbqWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link to={`/bbqs/${bbq.slug} className="d-flex justify-content-center">`}>
        <img src={bbq.image} alt={bbq.name} />
      </Link>
      <p>{bbq.name}</p>
      <p className="bbq-price">{bbq.price} KD</p>
      <DeleteButton deleteBbq={deleteBbq} bbqId={bbq.id} />
    </BbqWrapper>
  );
};
export default BbqItem;
