import React, { useContext } from "react";
import { DispatchContext } from "../../store/context";
import "./modal.css";

const Modal = ({ isOpen }) => {
  const dispatch = useContext(DispatchContext);

  return (
    <React.Fragment>
      {isOpen ? (
        <div
          style={{
            position: "absolute",
            backgroundColor: "rgba(0,0,0,0.6)",
            width: "50%",
            height: "200px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5px",
          }}
        >
          <p className="modal">You have added a product</p>
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
