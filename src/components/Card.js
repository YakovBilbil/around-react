function Card({ card, onCardClick }) {
  return (
    <>
      <li className="card">
        <button type="button" className="card__delete" />
        <img
          className="card__picture"
          src={card.link}
          alt={`A Card named ${card.name}`}
          onClick={() => onCardClick(card)}
        />
        <div className="card__name-heart">
          <h2 className="card__name">{`${card.name}`}</h2>
          <div className="card__like">
            <button type="button" className="card__heart" />
            <p className="card__likes-amount">{`${card.likesAmount}`}</p>
          </div>
        </div>
      </li>
    </>
  );
}

export default Card;
