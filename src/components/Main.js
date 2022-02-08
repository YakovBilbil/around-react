import React, { useState, useEffect } from "react";
//import { Routes, Route, BrowserRouter } from "react-router-dom";
import api from "../utils/Api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

import pencilImage from "../images/pencilImage.png";
import editButton from "../images/edit-button.png";
import Button from "./Button";

function Main({
  onEditAvatarClick,
  onCardClick,
  onEditProfileClick,
  onAddPlaceClick,
}) {
  const currentUser = React.useContext(CurrentUserContext);

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

  async function handleCardLike(card) {
    try {
      const isLiked = card.likes.some((i) => i._id === currentUser._id);
      const newCard = await api.changeLikeCardStatus(card._id, isLiked);
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  }

  async function handleCardDelete(card) {
    try {
      await api.deleteCard(card._id);
      setCards((cards) => cards.filter((c) => c.id !== card._id));
    } catch (error) {
      console.log("CAUGHT ERROR", error);
    }
  } //we have to check this function next after we will be able to create card

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__box-avatar">
            <img
              className="profile__avatar"
              src={`${currentUser.avatar}`}
              alt="Profile Avatar"
            />
            <Button name="edit-avatar" handleClick={onEditAvatarClick}>
              <img
                className="profile__edit-avatar-button-pencil not-visible"
                src={pencilImage}
                alt="edit avatar button"
              />
            </Button>
          </div>

          <div className="profile__info">
            <h1 className="profile__value-type-name">{`${currentUser.name}`}</h1>
            <p className="profile__value-type-profession">{`${currentUser.about}`}</p>
            <Button name="edit-profile" handleClick={onEditProfileClick}>
              <img
                className="profile__edit-icon"
                src={editButton}
                alt="Edit Button"
              />
            </Button>
          </div>

          <Button name="add-card" handleClick={onAddPlaceClick}>
            &#43;
          </Button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
