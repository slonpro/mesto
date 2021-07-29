import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
    this._popupElementImg = this._popup.querySelector('.popup__img')
    this._popupElementFigcaption = this._popup.querySelector('.popup__figcaption')
  }

  openPopup(link, name) {
    this._popupElementImg.src = link
    this._popupElementFigcaption.textContent = name
    super.openPopup()
  }

}