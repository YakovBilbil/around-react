import { GiSandsOfTime } from "react-icons/gi";

import hourglass from "../images/hourglass.png";
import pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";

import handlePopupClick from "./handlePopupClick";
import Button from "./Button";

function Main() {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__box-avatar">
            <img
              className="profile__avatar"
              src={hourglass}
              alt="Profile Avatar"
            />
            <Button name="edit-avatar" handleClick={handlePopupClick}>
              <img
                className="profile__edit-avatar-button-pencil not-visible"
                src={pencil}
                alt="edit avatar button"
              />
            </Button>
          </div>

          <div className="profile__info">
            <h1 className="profile__value-type-name">
              <GiSandsOfTime />
            </h1>
            <p className="profile__value-type-profession">
              <GiSandsOfTime />
            </p>
            <Button name="edit-profile" handleClick={handlePopupClick}>
              <img
                className="profile__edit-icon"
                src={editButton}
                alt="Edit Button"
              />
            </Button>
          </div>

          <Button name="add-card" handleClick={handlePopupClick}>
            &#43;
          </Button>
        </section>

        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
