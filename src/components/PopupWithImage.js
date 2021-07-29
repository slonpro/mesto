import Popup from './Popup.js'
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector)
  }

  openPopup(link, name) {
    const popupElementImg = this._popup.querySelector('.popup__img')
    const popupElementFigcaption = this._popup.querySelector('.popup__figcaption')
    popupElementImg.src = link
    popupElementFigcaption.textContent = name
    super.openPopup()
  }

}