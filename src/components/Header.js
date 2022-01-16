import header from "../images/header.svg";

function Header() {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src={header}
          alt="Title: Around the U.S."
        />
      </header>
    </>
  );
}

export default Header;
