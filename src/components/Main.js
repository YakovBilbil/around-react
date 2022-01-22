import React from "react";
import api from "../utils/Api";
import Card from "./Card";

import pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";
import Button from "./Button";

function Main(props) {
  const [userName, setUserName] = React.useState();

  const [userDescription, setUserDescription] = React.useState();

  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    (async function () {
      try {
        const userData = await api.getUserData();
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
      } catch (error) {
        console.log("CAUGHT ERROR", error);
      }
    })();
  }, []);

  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
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
              src={`${userAvatar}`}
              alt="Profile Avatar"
            />
            <Button name="edit-avatar" handleClick={props.onEditAvatarClick}>
              <img
                className="profile__edit-avatar-button-pencil not-visible"
                src={pencil}
                alt="edit avatar button"
              />
            </Button>
          </div>

          <div className="profile__info">
            <h1 className="profile__value-type-name">{`${userName}`}</h1>
            <p className="profile__value-type-profession">{`${userDescription}`}</p>
            <Button name="edit-profile" handleClick={props.onEditProfileClick}>
              <img
                className="profile__edit-icon"
                src={editButton}
                alt="Edit Button"
              />
            </Button>
          </div>

          <Button name="add-card" handleClick={props.onAddPlaceClick}>
            &#43;
          </Button>
        </section>

        <section className="cards">
          <ul className="cards__list">
            {cards.map((card) => (
              <Card key={card.id} card={card} onCardClick={props.onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

export default Main;
