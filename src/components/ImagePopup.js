import closeIcon from "../images/close-icon.svg";

function ImagePopup({ isCardPopupOpen, card, onClose }) {
  return (
    <>
      <div
        className={`popup popup_card-image ${
          isCardPopupOpen && "popup_opened"
        }`}
      >
        <div className="popup__form popup__image">
          <button
            type="button"
            className="popup__form-close-button popup__form-close-button_image"
            aria-label="Close"
          >
            <img
              className="popup__close-icon"
              src={closeIcon}
              alt="Close Icon"
              onClick={onClose}
            />
          </button>
          <img
            className="popup__image-photo"
            src={`${card.link}`}
            alt={`A Card named ${card.name}`}
          />
          <p className="popup__image-title">{`${card.name}`}</p>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
