import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import BbqModal from "../modals/BbqModal";
import { useState } from "react";

const AddButton = (burger) => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);

  const openModal = () => setIsOpen(true);
  return (
    <div>
      <>
        <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
        <BbqModal burger={burger} isOpen={isOpen} closeModal={closeModal} />
      </>
    </div>
  );
};

export default AddButton;
