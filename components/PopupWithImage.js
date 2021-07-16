export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  openPopup() {
    const popupElementImg = document.querySelector('.popup__img')
    const popupElementFigcaption = document.querySelector('.popup__figcaption')

    popupElementImg.src = this._link
    popupElementFigcaption.textContent = this._name
    super.openPopup()
  }

}