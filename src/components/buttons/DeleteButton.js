import { DeleteButtonStyled } from "../../styles";
import bbqStore from "../../stores/bbqStore";

const DeleteButton = ({ bbqId }) => {
  return (
    <DeleteButtonStyled onClick={() => bbqStore.DeleteButton(bbqId)}>
      DELETE
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
