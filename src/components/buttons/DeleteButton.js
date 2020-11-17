import rect from "react";
import { DeleteButtonStyled } from "../../styles";
import bbqStore from "../../stores/bbqStore";

const DeleteButton = (bbqId) => {
  return (
    <DeleteButtonStyled onClick={() => bbqStore.DeleteButton}>
      {" "}
      DELETE
    </DeleteButtonStyled>
  );
};
export default DeleteButton;
