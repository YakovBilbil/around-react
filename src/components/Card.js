function Card(props) {
  return (
    <>
      <li className="card">
        <button type="button" className="card__delete"></button>
        <img
          className="card__picture"
          src={`${props.card.link}`}
          alt={`A Card named ${props.card.name}`}
          onClick={() => props.onCardClick(props.card)}
        />
        <div className="card__name-heart">
          <h2 className="card__name">{`${props.card.name}`}</h2>
          <div className="card__like">
            <button type="button" className="card__heart"></button>
            <p className="card__likes-amount">{`${props.card.likesAmount}`}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
