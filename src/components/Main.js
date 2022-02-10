import React, { useContext } from "react";

import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";
import Button from "./Button";

import pencilImage from "../images/pencilImage.png";
import editButton from "../images/edit-button.png";

function Main({
  onEditAvatarClick,
  onCardClick,
  onEditProfileClick,
  onAddPlaceClick,
  cards,
  onCardLike,
  onCardDelete,
  onTrashClick,
}) {
  const currentUser = useContext(CurrentUserContext);

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
                onCardLike={onCardLike}
                onTrashClick={onTrashClick}
                onCardDelete={onCardDelete}
              />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
