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


let addButton = document.querySelector('.profile__add-button');
let popupCard = document.querySelector('.popup_card');
let popupCardCloseButton = document.querySelector('.popup__button-close_card');
let popupCardWindow = document.querySelector('.popup__window_card');
let formCardElement = document.querySelector('.popup__form_card')

let popupCardTitle = document.querySelector('#title');
let popupCardSrc = document.querySelector('#src');


//Добавляем карточки из базы
initialCards.forEach(function (item) {
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
  cardElement.querySelector('.card__img').src = item.link;
  cardElement.querySelector('.card__title').textContent = item.name;
  cardElement.querySelector('.card__img').alt = item.name;

  const buttonLike = cardElement.querySelector('.card__like')
  buttonLike.addEventListener('click', function () {
    buttonLike.classList.toggle('card__like_active');
  })
  const buttonDelete = cardElement.querySelector('.card__delete')
  buttonDelete.addEventListener('click', function () {
    const listItem = buttonDelete.closest('.card__item');
    listItem.remove();
  })
  sectionCard.append(cardElement);
  const buttonImg = cardElement.querySelector('.card__img')
  buttonImg.addEventListener('click', popupOpenedImg)

})


//Открываем диалоговое окно и записываем в него значения
function popupOpenedCard() {
  popupCard.classList.add('popup_opened');

};

//Функция закрытия popup
function closePopupCard() {
  popupCard.classList.remove('popup_opened');
};



// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  const cardData = {
    name: popupCardTitle.value,
    link: popupCardSrc.value
  }
  sectionCard.prepend(createCard(cardData))
  closePopupCard()
  clearPopup()
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formCardElement.addEventListener('submit', formSubmitHandler);

//Что бы форма не закрывалась кликая по контенту
popupCardWindow.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
});

addButton.addEventListener('click', popupOpenedCard);

//Отслеживание клика по оверлею и кнопке
popupCard.addEventListener('click', closePopupCard);
popupCardCloseButton.addEventListener('click', closePopupCard);


//Добавление карточки
function createCard(cardData) {
  const cardElement = cardTemplate.querySelector('.card__item').cloneNode(true);
  cardElement.querySelector('.card__img').src = cardData.link;
  cardElement.querySelector('.card__title').textContent = cardData.name;
  cardElement.querySelector('.card__img').alt = cardData.name;
  const button = cardElement.querySelector('.card__like')
  button.addEventListener('click', function likeget() {
    button.classList.toggle('card__like_active');

  })
  const buttonDelete = cardElement.querySelector('.card__delete')
  buttonDelete.addEventListener('click', function () {
    const listItem = buttonDelete.closest('.card__item');
    listItem.remove();
  })
  const buttonImg = cardElement.querySelector('.card__img')
  buttonImg.addEventListener('click', popupOpenedImg)
  return cardElement;
}

//Очистка формы
function clearPopup() {
  popupCardTitle.value = ''
  popupCardSrc.value = ''
}




let imgButton = document.querySelectorAll('.card__img');
let popupImg = document.querySelector('.popup_img');
let popupCloseButtonImg = document.querySelector('.popup__button-close_img');
let popupWindowImg = document.querySelector('.popup__window-img');
const cardImg = document.querySelectorAll('.card__img')
const popupImgItem = popupImg.querySelector('.popup__img')
const popupFigcaption = popupImg.querySelector('.popup__figcaption')


//Открываем диалоговое окно и записываем в него значения
function popupOpenedImg(event) {
  popupImg.classList.add('popup_opened');
  const blockImg = event.target.parentElement
  const blockFigcaption = event.target.nextElementSibling.offsetParent.nextElementSibling
  const cardImg = blockImg.querySelector('.card__img').src
  const cardFigcaption = blockFigcaption.querySelector('.card__title')
  popupImgItem.setAttribute('src', cardImg)
  popupFigcaption.textContent = cardFigcaption.textContent
  console.log(cardFigcaption.textContent)
};

//Функция закрытия popup
function closePopupImg() {
  popupImg.classList.remove('popup_opened');
};



//Что бы форма не закрывалась кликая по контенту
popupWindowImg.addEventListener('click', function (event) {
  event.stopImmediatePropagation();
});



//Отслеживание клика по оверлею и кнопке
popupImg.addEventListener('click', closePopupImg);
popupCloseButtonImg.addEventListener('click', closePopupImg);



