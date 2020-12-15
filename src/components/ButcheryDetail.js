import React from "react";
import { useParams, Redirect } from "react-router";
import { DetailWrapper } from "../styles";
import butcheryStore from "../stores/butcheryStore";
import BbqList from "./BbqList";
import UpdateButton from "./buttons/UpdateButton";
import bbqsStore from "../stores/bbqStore";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";

const ButcheryDetail = () => {
  const { butcherySlug } = useParams();
  const butchery = butcheryStore.butcherys.find(
    (_butchery) => _butchery.slug === butcherySlug
  );
  if (!butchery) return <Redirect to="/" />;
  console.log(butchery);
  const bbqs = butchery.bbqs.map((bbq) => bbqsStore.getBbqById(bbq.id));
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{butchery.name}</h4>
          <img src={butchery.image} alt={butchery.name} />
          <UpdateButton butchery={butchery} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        {/* we should take the bbqs that belong to this bakery  */}
        <BbqList bbqs={bbqs} />
        {authStore.user && <AddButton butchery={butchery} />}
      </div>
    </div>
  );
};
export default observer(ButcheryDetail);
