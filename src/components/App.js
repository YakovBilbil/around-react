import React, { useState, useEffect } from "react";

import CurrentUserContext from "../contexts/CurrentUserContext";
import api from "../utils/Api";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import ImagePopup from "./ImagePopup.js";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import VerifyDeletePopup from "./VerifyDeletePopup";

function App() {
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

  const [cards, setCards] = useState([]);

  useEffect(() => {
    (async function () {
      try {
        const cardsData = await api.getInitialCards();
        setCards(cardsData);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);

  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }
  const handleUpdateAvatar = (avatar) => {
    (async function () {
      try {
        const updatedAvatar = await api.changeProfilePicture(avatar);
        setCurrentUser(updatedAvatar);
        closeAllPopups();
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  };

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
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

  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  async function handleAddPlaceSubmit(name, link) {
    try {
      const newCard = await api.addCard(name, link);
      setCards([newCard, ...cards]);
      closeAllPopups();
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }

  const [card, setCard] = useState({});

  const [isVerifyDeletePopupOpen, setIsVerifyDeletePopupOpen] = useState(false);
  function handleTrashClick(card) {
    setIsVerifyDeletePopupOpen(true);
    setCard(card);
  }
  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((cards) => cards.filter((c) => c.id !== card._id));
      closeAllPopups();
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }

  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  function handleCardClick(card) {
    setIsCardPopupOpen(true);
    setCard(card);
  }

  async function handleCardLike(card) {
    try {
      const isLiked = card.likes.some((i) => i._id === currentUser._id);
      const newCard = await api.changeLikeCardStatus(card._id, isLiked);
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsCardPopupOpen(false);
    setIsVerifyDeletePopupOpen(false);
    setCard({});
  }

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
              cards={cards}
              onCardLike={handleCardLike}
              onTrashClick={handleTrashClick}
              onCardDelete={handleCardDelete}
            />
            <Footer />
          </div>

          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <AddPlacePopup
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit}
          />

          <VerifyDeletePopup
            isOpen={isVerifyDeletePopupOpen}
            card={card}
            onClose={closeAllPopups}
            onConfirmDeleteClick={handleCardDelete}
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
