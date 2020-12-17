import { ButcheryWrapper } from "../styles";
import { Link } from "react-router-dom";

import { observer } from "mobx-react";

const ButcheryItem = ({ butchery }) => {
  return (
    <ButcheryWrapper>
      <Link to={`/butcherys/${butchery.slug}`}>
        <img src={butchery.image} alt={butchery.name} />
      </Link>
    </ButcheryWrapper>
  );
};
export default observer(ButcheryItem);
