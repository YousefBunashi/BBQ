import React from "react";
import { useParams, Redirect } from "react-router";
import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import bbqStore from "../stores/bbqStore";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const BbqDetail = () => {
  const { bbqSlug } = useParams();
  const bbq = bbqStore.bbqs.find((_bbq) => _bbq.slug === bbqSlug);
  if (!bbq) return <Redirect to="/bbqs" />;

  return (
    <>
      <Link to="/bbqs">
        <button> goback </button>{" "}
      </Link>
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
export default observer(BbqDetail);
