import { Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

// eslint-disable-next-line react/prop-types
function BoxModal({ children, ...props }) {
  return (
    <>
      <Modal
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        {...props}
      >
        <div style={{ ...style }}>{children}</div>
      </Modal>
    </>
  );
}

export default BoxModal;
