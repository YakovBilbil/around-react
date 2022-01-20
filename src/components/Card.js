function Card({ name, link, likesAmount }) {
  return (
    <>
      <li className="card">
        <button type="button" className="card__delete"></button>
        <img
          className="card__picture"
          src={`${link}`}
          alt={`A Card named ${name}`}
        />
        <div className="card__name-heart">
          <h2 className="card__name">{`${name}`}</h2>
          <div className="card__like">
            <button type="button" className="card__heart"></button>
            <p className="card__likes-amount">{`${likesAmount}`}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
