import React from "react";
import { useParams, Redirect } from "react-router";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import bbqStore from "../stores/bbqStore";

const BbqDetail = ({ bbqs }) => {
  const { bbqSlug } = useParams().bbqSlug;
  const bbq = bbqs.find((_bbq) => _bbq.slug === bbqSlug);
  if (!bbq) return <Redirect to="/bbqs" />;

  return (
    <>
      <button> goback </button>
      <DetailWrapper>
        <h1>{bbq.name}</h1>
        <img src={bbq.image} alt={bbq.name} />
        <p>{bbq.description}</p>
        <p>{bbq.price} KD</p>
        <DeleteButton bbqId={bbq.id} />
      </DetailWrapper>
    </>
  );
};
export default BbqDetail;
