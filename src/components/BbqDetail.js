import React from "react";
import { useParams } from "react-router";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const BbqDetail = (props) => {
  const bbqId = useParams().bbqId;
  const bbq = props.bbqs.find((bbq) => bbq.slug === bbqId);

  const handelDelete = (bbqId) => {
    props.deleteBbq(bbqId);
  };

  return (
    <>
      <button> goback </button>
      <DetailWrapper>
        <h1>{bbq.name}</h1>
        <img src={bbq.image} alt={bbq.name} />
        <p>{bbq.description}</p>
        <p>{bbq.price} KD</p>
        <DeleteButton bbqId={bbq.id} deleteBbq={handelDelete}></DeleteButton>
      </DetailWrapper>
    </>
  );
};
export default BbqDetail;
