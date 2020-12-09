import React from "react";
import { useParams, Redirect } from "react-router";
import { DetailWrapper } from "../styles";
import burgerStore from "../stores/burgerStore";
import BbqList from "./BbqList";
import UpdateButton from "./buttons/UpdateButton";
import bbqsStore from "../stores/bbqStore";
import AddButton from "./buttons/AddButton";
import { observer } from "mobx-react";

const BurgerDetail = () => {
  const { burgerSlug } = useParams();
  const burger = burgerStore.burgers.find(
    (_burger) => _burger.slug === burgerSlug
  );
  if (!burger) return <Redirect to="/" />;
  console.log(burger);
  const bbqs = burger.bbqs.map((bbq) => bbqsStore.getBbqById(bbq.id));
  return (
    <div className="row">
      <div className="container">
        <DetailWrapper className="col-12">
          <h4>{burger.name}</h4>
          <img src={burger.image} alt={burger.name} />
          <UpdateButton burger={burger} />
        </DetailWrapper>
      </div>
      <div className="col-12">
        <BbqList bbqs={bbqs} />
        <AddButton burger={burger} />
      </div>
    </div>
  );
};
export default observer(BurgerDetail);
