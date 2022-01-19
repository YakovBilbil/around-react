function handlePopupClick(name) {
  document.querySelector(`.popup_${name}`).classList.add("popup_opened");
}

export default handlePopupClick;
