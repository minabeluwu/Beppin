import React, { useContext } from "react";
import { DispatchContext } from "../../store/context";
import "./modal.css";

const Modal = ({ isOpen }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <React.Fragment>
      {isOpen ? (
        <div className="modal">
          <p className="modal-content">You have added a product</p>
          <button
            onClick={() => {
              dispatch({
                type: "CLOSE_MODAL",
              });
            }}
            className="modal-button"
          >
            Accept
          </button>
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default Modal;
