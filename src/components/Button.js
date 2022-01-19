function Button(props) {
  return (
    <button
      type="button"
      className={`profile__${props.name}-button`}
      onClick={() => props.handleClick(`${props.name}`)}
    >
      {props.children}
    </button>
  );
}

export default Button;
