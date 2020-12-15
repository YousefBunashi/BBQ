import { ButcheryWrapper } from "../styles";
import { Link } from "react-router-dom";

import { observer } from "mobx-react";

const ButcheryItem = ({ butchery }) => {
  return (
    <ButcheryWrapper className="col-lg-3 col-md-4 col-sm-6">
      <Link
        to={`/butcherys/${butchery.slug}`}
        className="d-flex justify-content-center"
      >
        <img src={butchery.image} alt={butchery.name} />
      </Link>
      <p>{butchery.name}</p>
    </ButcheryWrapper>
  );
};
export default observer(ButcheryItem);
