import { UpdateButtonStyled } from "../../styles";
import BbqModal from "../modals/BbqModal";
import { useState } from "react";

const UpdateButton = ({ bbq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);

  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <BbqModal isOpen={isOpen} closeModal={closeModal} oldBbq={bbq} />
    </>
  );
};

export default UpdateButton;
