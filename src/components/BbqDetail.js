import React from "react";
import { DetailWrapper } from "../styles";

const BbqDetail = (props) => {
  const bbq = props.bbq;
  return (
    <DetailWrapper>
      <h1>{bbq.name}</h1>
      <img src={bbq.image} alt={bbq.name} />
      <p>{bbq.description}</p>
      <p>{bbq.price} KD</p>
    </DetailWrapper>
  );
};
export default BbqDetail;
