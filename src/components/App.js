import React, { useState } from "react";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardPopupOpen(false);
    setCard({});
  }

  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [card, setCard] = useState({});

  function handleCardClick(card) {
    setIsCardPopupOpen(true);
    setCard(card);
  }

  return (
    <>
      <div className="page">
        <div className="container">
          <Header />
          <Main
            onEditAvatarClick={handleEditAvatarClick}
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onCardClick={handleCardClick}
          />
          <Footer />
        </div>

        <PopupWithForm
          title="Change profile picture"
          name="edit-avatar"
          submitButtonText="Save"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="url"
            name="link"
            id="avatar-url-input"
            placeholder="Profile picture link"
            className="popup__form-input popup__form-input_type_image-link"
            required
          />
          <p className="popup__form-input-error" id="avatar-url-input-error" />
        </PopupWithForm>

        <PopupWithForm
          title="Edit profile"
          name="edit-profile"
          submitButtonText="Save"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="fullName"
            id="name-input"
            placeholder="Name"
            className="popup__form-input popup__form-input_type_name"
            minLength="2"
            maxLength="40"
            required
          />
          <p className="popup__form-input-error" id="name-input-error" />
          <input
            type="text"
            name="profession"
            id="profession-input"
            placeholder="About me"
            className="popup__form-input popup__form-input_type_profession"
            minLength="2"
            maxLength="200"
            required
          />
          <p className="popup__form-input-error" id="profession-input-error" />
        </PopupWithForm>

        <PopupWithForm
          title="New place"
          name="add-card"
          submitButtonText="Create"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
          <input
            type="text"
            name="name"
            id="title-input"
            placeholder="Title"
            className="popup__form-input popup__form-input_type_title"
            minLength="1"
            maxLength="30"
            required
          />
          <p className="popup__form-input-error" id="title-input-error" />
          <input
            type="url"
            name="link"
            id="url-input"
            placeholder="Image link"
            className="popup__form-input popup__form-input_type_image-link"
            required
          />
          <p className="popup__form-input-error" id="url-input-error" />
        </PopupWithForm>

        <PopupWithForm
          title="Are you sure?"
          name="verify-card-delete"
          submitButtonText="Yes"
        />

        <ImagePopup
          isCardPopupOpen={isCardPopupOpen}
          card={card}
          onClose={closeAllPopups}
        />
      </div>
    </>
  );
}

export default App;
