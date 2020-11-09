import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const bbqId = props.bbqId;
  const handleDelete = () => {
    props.deleteBbq(bbqId);
  };
  return (
    <DeleteButtonStyled onClick={handleDelete}> DELETE</DeleteButtonStyled>
  );
};

export default DeleteButton;
