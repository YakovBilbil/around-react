import { GiSandsOfTime } from "react-icons/gi";
import hourglass from "../images/hourglass.png";
import pencil from "../images/pencil.png";
import editButton from "../images/edit-button.png";

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
            <button type="button" className="profile__edit-avatar-button">
              <img
                className="profile__edit-avatar-button-pencil not-visible"
                src={pencil}
                alt="edit avatar button"
              />
            </button>
          </div>
          <div className="profile__info">
            <h1 className="profile__value-type-name">
              <GiSandsOfTime />
            </h1>
            <p className="profile__value-type-profession">
              <GiSandsOfTime />
            </p>
            <button
              type="button"
              className="profile__edit-button"
              aria-label="Edit Profile"
            >
              <img
                className="profile__edit-icon"
                src={editButton}
                alt="Edit Button"
              />
            </button>
          </div>
          <button type="button" className="profile__add-button">
            &#43;
          </button>
        </section>

        <section className="cards">
          <ul className="cards__list"></ul>
        </section>
      </main>
    </>
  );
}

export default Main;
