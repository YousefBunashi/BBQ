import React from "react";
import { useParams, Redirect } from "react-router";
import BbqList from "./BbqList";
import { observer } from "mobx-react";

// Stores
import bbqsStore from "../stores/bbqStore";
import authStore from "../stores/authStore";
import butcheryStore from "../stores/butcheryStore";
// Styles

import { DetailWrapper } from "../styles";
import AddButton from "./buttons/AddButton";

const ButcheryDetail = () => {
  const { butcherySlug } = useParams();
  const butchery = butcheryStore.butcheries.find(
    (_butchery) => _butchery.slug === butcherySlug
  );
  if (!butchery) return <Redirect to="/butcheries" />;
  const bbqsFromBbqStore = butchery.bbqs.map((bbq) =>
    bbqsStore.getBbqById(bbq.id)
  );
  return (
    <div>
      <DetailWrapper>
        <h1>{butchery.name}</h1>
        <img src={butchery.image} alt={butchery.name} />
      </DetailWrapper>

      <div>
        {/* we should take the bbqs that belong to this bakery  */}
        <BbqList bbqs={bbqsFromBbqStore} />
        {authStore.user && <AddButton butchery={butchery} />}
      </div>
    </div>
  );
};
export default observer(ButcheryDetail);
