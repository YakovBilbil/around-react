import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";
import closeIcon from "../images/close-icon.svg";
import PopupWithForm from "./PopupWithForm";

function App() {
  return (
    <>
      <div className="page">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>

        <PopupWithForm
          title="Edit profile"
          name="edit-profile"
          submitButtonText="Save"
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
          <p className="popup__form-input-error" id="name-input-error"></p>
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
          <p
            className="popup__form-input-error"
            id="profession-input-error"
          ></p>
        </PopupWithForm>

        <PopupWithForm
          title="New place"
          name="add-card"
          submitButtonText="Create"
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
          <p className="popup__form-input-error" id="title-input-error"></p>
          <input
            type="url"
            name="link"
            id="url-input"
            placeholder="Image link"
            className="popup__form-input popup__form-input_type_image-link"
            required
          />
          <p className="popup__form-input-error" id="url-input-error"></p>
        </PopupWithForm>

        <PopupWithForm
          title="Change profile picture"
          name="edit-avatar"
          submitButtonText="Save"
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
          ></p>
        </PopupWithForm>

        <div className="popup popup_card-image">
          <div className="popup__form popup__image">
            <button
              type="button"
              className="popup__form-close-button popup__form-close-button_image"
              aria-label="Close"
            >
              <img
                className="popup__close-icon"
                src={closeIcon}
                alt="Close Icon"
              />
            </button>
            <img className="popup__image-photo" src="#" alt="#" />
            <p className="popup__image-title"></p>
          </div>
        </div>

        <div className="popup popup_verify-card-delete">
          <div className="popup__form">
            <form className="popup__form-submit">
              <h2 className="popup__form-title">Are you sure?</h2>
              <button
                type="submit"
                className="popup__form-save-button popup__verify-delete-button"
              >
                Yes
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
      </div>

      <template className="card-template">
        <li className="card">
          <button type="button" className="card__delete"></button>
          <img className="card__picture" src="#" alt="#" />
          <div className="card__name-heart">
            <h2 className="card__name">...</h2>
            <div className="card__like">
              <button type="button" className="card__heart"></button>
              <p className="card__likes-amount"></p>
            </div>
          </div>
        </li>
      </template>
    </>
  );
}

export default App;

/*
        <div className="popup popup_edit-profile">
          <div className="popup__form">
            <form
              className="popup__form-submit"
              name="popup_edit-profile"
              noValidate
            >
              <h2 className="popup__form-title">Edit profile</h2>
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
              <p className="popup__form-input-error" id="name-input-error"></p>
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
              <p
                className="popup__form-input-error"
                id="profession-input-error"
              ></p>
              <button type="submit" className="popup__form-save-button">
                Save
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


      <div className="popup popup_add-card">
          <div className="popup__form">
            <form
              className="popup__form-submit"
              name="popup_add-card"
              noValidate
            >
              <h2 className="popup__form-title">New place</h2>
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

              <p className="popup__form-input-error" id="title-input-error"></p>
              <input
                type="url"
                name="link"
                id="url-input"
                placeholder="Image link"
                className="popup__form-input popup__form-input_type_image-link"
                required
              />
              <p className="popup__form-input-error" id="url-input-error"></p>
              <button type="submit" className="popup__form-save-button">
                Create
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


        <div className="popup popup_edit-avatar">
          <div className="popup__form">
            <form
              className="popup__form-submit"
              name="popup_edit-avatar"
              noValidate
            >
              <h2 className="popup__form-title">Change profile picture</h2>
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
              ></p>
              <button type="submit" className="popup__form-save-button">
                Save
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



        */
