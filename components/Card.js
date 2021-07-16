export class Card {
  constructor(data, cardSelector, openPopup) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
    this._openPopup = openPopup
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.card__item')
      .cloneNode(true)

    return cardElement
  }

  createCard() {
    this._element = this._getTemplate()
    this._setEventListener()

    this._element.querySelector('.card__img').src = this._link
    this._element.querySelector('.card__title').textContent = this._name
    this._element.querySelector('.card__title').alt = this._name
    return this._element

  }

  _toggleLike() {
    this._element.querySelector('.card__like').classList.toggle('card__like_active')
  }


  _openPopupImg() {
    const popupElementImg = document.querySelector('.popup__img')
    const popupElementFigcaption = document.querySelector('.popup__figcaption')

    popupElementImg.src = this._link
    popupElementFigcaption.textContent = this._name
    const popupImg = document.querySelector('.popup_img')
    this._openPopup(popupImg)
  }

  _removeCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListener() {

    this._element.querySelector('.card__img')
      .addEventListener('click', () => {
        this._openPopupImg()
      })

    this._element.querySelector('.card__like').
      addEventListener('click', () => this._toggleLike())


    this._element.querySelector('.card__delete').
      addEventListener('click', () => this._removeCard())

  }
}