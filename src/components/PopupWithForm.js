import closeIcon from "../images/close-icon.svg";

function PopupWithForm(props) {
  return (
    <div className={`popup popup_${props.name}`}>
      <div className="popup__form">
        <form
          className="popup__form-submit"
          name={`popup_${props.name}`}
          noValidate
        >
          <h2 className="popup__form-title">{`${props.title}`}</h2>

          {props.children}

          <button type="submit" className="popup__form-save-button">
            {`${props.submitButtonText}`}
          </button>
          <button
            type="button"
            className="popup__form-close-button"
            aria-label="Close"
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
