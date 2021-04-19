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

const cardTemplate = document.querySelector('#card_template').content;
const sectionCard = document.querySelector('.card')

const addButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup_card');
const popupCardCloseButton = document.querySelector('.popup__button-close_card');
const formCardElement = document.querySelector('.popup__form_card')

const popupCardTitle = document.querySelector('#title');
const popupCardSrc = document.querySelector('#src');

//Добавляем карточки из базы
initialCards.forEach(function (item) {
  const cardData = {
    name: item.name,
    link: item.link
  }
  prependCard(cardData)
})

function prependCard(cardData) {
  sectionCard.prepend(createCard(cardData))
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  const cardData = {
    name: popupCardTitle.value,
    link: popupCardSrc.value
  }
  prependCard(cardData)
  closePopup(popupCard)
  clearPopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formCardElement.addEventListener('submit', formSubmitHandler);



function openPopupCard() {
  openPopup(popupCard)
}

addButton.addEventListener('click', openPopupCard);

popupCardCloseButton.addEventListener('click', () => closePopup(popupCard));

//Добавление карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
  const buttonImg = cardElement.querySelector('.card__img')
  buttonImg.src = cardData.link;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  buttonImg.alt = cardData.name;
  const button = cardElement.querySelector('.card__like')
  button.addEventListener('click', function () {
    button.classList.toggle('card__like_active');
  })
  const buttonDelete = cardElement.querySelector('.card__delete')
  buttonDelete.addEventListener('click', function () {
    const listItem = buttonDelete.closest('.card__item');
    listItem.remove();
  })
  
  buttonImg.addEventListener('click', openPopupImg)
  
  /* buttonElement.classList.add('popup__save-button_inactive'); */
  return cardElement;
}

//Очистка формы
function clearPopup() {
  popupCardTitle.value = ''
  popupCardSrc.value = ''
  document.querySelector('#submit').classList.add(settings.inactiveButtonClass)
}
console.log()
const popupImg = document.querySelector('.popup_img');
const popupCloseButtonImg = document.querySelector('.popup__button-close_img');
const popupImgItem = popupImg.querySelector('.popup__img')
const popupFigcaption = popupImg.querySelector('.popup__figcaption')

//Открываем диалоговое окно и записываем в него значения
function openPopupImg(event) {
  openPopup(popupImg)
  const blockCard = event.target.closest('.card__item')
  const cardImg = blockCard.querySelector('.card__img').src
  const cardFigcaption = blockCard.querySelector('.card__title')
  popupImgItem.setAttribute('src', cardImg)
  popupFigcaption.textContent = cardFigcaption.textContent
  
};



popupCloseButtonImg.addEventListener('click', () => closePopup(popupImg));



