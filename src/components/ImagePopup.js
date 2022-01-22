import closeIcon from "../images/close-icon.svg";

function ImagePopup(props) {
  return (
    <>
      <div
        className={`popup popup_card-image ${
          props.selectedCard.isCardClicked ? "popup_opened" : ""
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
              onClick={props.onClose}
            />
          </button>
          <img
            className="popup__image-photo"
            src={`${props.selectedCard.cardData.link}`}
            alt={`A Card named ${props.selectedCard.cardData.name}`}
          />
          <p className="popup__image-title">{`${props.selectedCard.cardData.name}`}</p>
        </div>
      </div>
    </>
  );
}

export default ImagePopup;
