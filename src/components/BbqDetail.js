import React from "react";
import { useParams, Redirect } from "react-router";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const BbqDetail = (bbqs, deleteBbq) => {
  const bbqSlug = useParams().bbqSlug;
  const bbq = bbqs.find((_bbq) => _bbq.slug === bbqSlug);
  if (!bbq) return <Redirect to="/bbqs" />;

  const handelDelete = (bbqSlug) => {
    deleteBbq(bbqSlug);
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
