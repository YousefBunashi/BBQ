import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { CreateButtonStyled } from "../../styles.js";
import bbqStore from "../../stores/bbqStore";

const BbqModal = ({ isOpen, closeModal, oldBbq }) => {
  const [bbq, setBbq] = useState(
    oldBbq ?? {
      name: "",
      price: 0,
      description: "",
      image: "",
    }
  );
  const handleImage = (event) =>
    setBbq({ ...bbq, image: event.target.files[0] });

  const handleChange = (event) => {
    setBbq({ ...bbq, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    bbqStore[oldBbq ? "updateBbq" : "createBbq"](bbq);
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} contentLabel="Bbq Modal">
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-6">
            <label>Name</label>
            <input
              required
              value={bbq.name}
              name="name"
              type="text"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-6">
            <label>Price</label>
            <input
              required
              name="price"
              value={bbq.price}
              type="number"
              min="1"
              className="form-control"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label>Description</label>
          <input
            required
            name="description"
            value={bbq.description}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Image</label>
          <input
            required
            name="image"
            type="file"
            className="form-control"
            onChange={handleImage}
          />
        </div>
        <CreateButtonStyled className="btn float-right" type="submit">
          {oldBbq ? "Update" : "Create"}
        </CreateButtonStyled>
      </form>
    </Modal>
  );
};

export default BbqModal;
