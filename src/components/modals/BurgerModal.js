import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import BurgerModal from "../modals/BurgerModal";

const AddBurgerButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <BurgerModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddBurgerButton;
