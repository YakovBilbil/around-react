import closeIcon from "../images/close-icon.svg";

function PopupWithForm({
  name,
  isOpen,
  title,
  children,
  submitButtonText,
  onClose,
}) {
  return (
    <div className={`popup popup_${name} ${isOpen && "popup_opened"}`}>
      <div className="popup__form">
        <form className="popup__form-submit" name={`popup_${name}`} noValidate>
          <h2 className="popup__form-title">{`${title}`}</h2>

          {children}

          <button type="submit" className="popup__form-save-button">
            {`${submitButtonText}`}
          </button>
          <button
            type="button"
            className="popup__form-close-button"
            aria-label="Close"
            onClick={onClose}
          >
            <img
              className="popup__close-icon"
              src={closeIcon}
              alt="Close Icon"
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;
