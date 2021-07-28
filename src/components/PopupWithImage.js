import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector, link, name) {
    super(popupSelector)
    this.link = link
    this.name = name
  }

  openPopup() {
    const popupElementImg = this._popupSelector.querySelector('.popup__img')
    const popupElementFigcaption = this._popupSelector.querySelector('.popup__figcaption')
    popupElementImg.src = this.link
    popupElementFigcaption.textContent = this.name
    super.openPopup()
  }

}