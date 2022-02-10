import PopupWithForm from "./PopupWithForm";

function VerifyDeletePopup({ isOpen, card, onClose, onConfirmDeleteClick }) {
  function handleSubmit(e) {
    e.preventDefault();
    onConfirmDeleteClick(card);
  }

  return (
    <PopupWithForm
      title="Are you sure?"
      name="verify-card-delete"
      submitButtonText="Yes"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}

export default VerifyDeletePopup;
