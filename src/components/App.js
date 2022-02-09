import React, { useState, useEffect } from "react";
//import { Routes, Route, BrowserRouter } from "react-router-dom";

import CurrentUserContext from "../contexts/CurrentUserContext";

import api from "../utils/Api";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup";

function App() {
  ///////////////////// task 1 ////////////////

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const userInfo = await api.getUserInfo();
        setCurrentUser(userInfo);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);

  /////////////////////////////

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

  const handleUpdateUser = ({ name, about }) => {
    (async function () {
      try {
        const updatedUserInfo = await api.editProfile({ name, about });
        setCurrentUser(updatedUserInfo);
        closeAllPopups();
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  };

  /*
  async function handleUpdateUser() {
    try {
      const updatedUserInfo = await api.editProfile();
      setCurrentUser(updatedUserInfo);
      closeAllPopups();
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }
*/
  return (
    <>
      <CurrentUserContext.Provider value={currentUser}>
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
            <p
              className="popup__form-input-error"
              id="avatar-url-input-error"
            />
          </PopupWithForm>

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

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
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
