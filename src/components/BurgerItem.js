import { BurgerWrapper } from "../styles";
import { Link } from "react-router-dom";

import { observer } from "mobx-react";

const BurgerItem = ({ burger }) => {
  return (
    <BurgerWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/burgers/${burger.slug}`}
        className="d-flex justify-content-center"
      >
        <img src={burger.image} alt={burger.name} />
      </Link>
      <p>{burger.name}</p>
    </BurgerWrapper>
  );
};
export default observer(BurgerItem);
