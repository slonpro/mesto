export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

const popupImg = document.querySelector('.popup_img')
export const formCardElement = document.querySelector('.popup__form_card')
export const addCardButton = document.querySelector('.profile__add-button');
export const popupCard = document.querySelector('.popup_card');
const popupElementImg = document.querySelector('.popup__img')
const popupElementFigcaption = document.querySelector('.popup__figcaption')
export const popupCardTitle = document.querySelector('#title');
export const popupCardSrc = document.querySelector('#src');


class Card {
  constructor(data, cardSelector) {
    this._name = data.name
    this._link = data.link
    this._cardSelector = cardSelector
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



  _openPopupImg() {
    popupElementImg.src = this._link
    popupElementFigcaption.textContent = this._name
    popupImg.classList.add('popup_opened')
  }

  _setEventListener() {

    this._element.querySelector('.card__img')
      .addEventListener('click', () => {
        this._openPopupImg()
      })

    const buttonLike = this._element.querySelector('.card__like')
    buttonLike.addEventListener('click', () => {
      buttonLike.classList.toggle('card__like_active')
    })

    const buttonCardDelete = this._element.querySelector('.card__delete')
    buttonCardDelete.addEventListener('click', function () {
      const listItem = buttonCardDelete.closest('.card__item');
      listItem.remove();
    })

  }
}

export {Card}