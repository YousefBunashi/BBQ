import { useState } from "react";
import { BsPlusCircle } from "react-icons/bs";
import ButcheryModal from "./ButcheryModal";

const AddButcheryButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <BsPlusCircle className="float-right" size="2em" onClick={openModal} />
      <ButcheryModal isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default AddButcheryButton;
