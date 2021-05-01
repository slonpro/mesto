const initialCards = [
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

    popupImg.classList.add('popup_opened')
  }

  _setEventListener() {
    const buttonImg = this._element.querySelector('.card__img')

    buttonImg.addEventListener('click', () => {
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

initialCards.forEach((item) => {
  const card = new Card(item, '#card_template');
  const cardElement = card.createCard();

  // Добавляем в DOM
  document.querySelector('.card').prepend(cardElement);
});