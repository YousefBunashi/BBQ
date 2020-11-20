import { BbqWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import { Link } from "react-router-dom";

import UpdateButton from "./buttons/UpdateButton";
import { observer } from "mobx-react";

const BbqItem = ({ bbq }) => {
  //   const bbq = props.bbq;
  // const { bbq } = props;

  return (
    <BbqWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link to={`/bbqs/${bbq.slug}`} className="d-flex justify-content-center">
        <img src={bbq.image} alt={bbq.name} />
      </Link>
      <p>{bbq.name}</p>
      <p className="bbq-price">{bbq.price} KD</p>
      <UpdateButton bbq={bbq} />
      <DeleteButton bbqId={bbq.id} />
    </BbqWrapper>
  );
};
export default observer(BbqItem);
