import React, { useState, useEffect } from "react";
import api from "../utils/Api";
import Card from "./Card";

import pencilImage from "../images/pencilImage.png";
import editButton from "../images/edit-button.png";
import Button from "./Button";

function Main({
  onEditAvatarClick,
  onCardClick,
  onEditProfileClick,
  onAddPlaceClick,
}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    (async function () {
      try {
        const userData = await api.getUserData();
        setUser(userData);
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
        setCards(
          cardsData.map((card) => ({
            id: card._id,
            name: card.name,
            link: card.link,
            likesAmount: card.likes.length,
          }))
        );
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__box-avatar">
            <img
              className="profile__avatar"
              src={`${user.avatar}`}
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
            <h1 className="profile__value-type-name">{`${user.name}`}</h1>
            <p className="profile__value-type-profession">{`${user.about}`}</p>
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
              <Card key={card.id} card={card} onCardClick={onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
