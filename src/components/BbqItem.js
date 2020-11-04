import { BbqWrapper } from "../styles";

const BbqItem = (props) => {
  console.log(props.bbqobject.name);
  return (
    <BbqWrapper>
      <img src={props.bbqobject.image} alt={props.bbqobject.name} />
      <p>{props.bbqobject.name}</p>
      <p>{props.bbqobject.price} KD</p>
    </BbqWrapper>
  );
};

export default BbqItem;
