//FormValidator 
import {FormValidator} from './FormValidator.js'

const settings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_active',
  errorClass: 'popup__form-error_active'
}

const isForm = new FormValidator(settings)
isForm.enableValidation();

//Card start -------------
import {Card, initialCards, formCardElement, addCardButton, popupCard, popupCardTitle, popupCardSrc} from './Card.js'

initialCards.forEach((item) => {
  const card = new Card(item, '#card_template');
  const cardElement = card.createCard();

  // Добавляем в DOM
  document.querySelector('.card').prepend(cardElement);
});

//Очистка формы
const clearPopupCard = () => {
  popupCardTitle.value = ''
  popupCardSrc.value = ''
  document.querySelector('#submit').classList.add(settings.inactiveButtonClass)
}

function formSubmitHandler(evt) {
  evt.preventDefault();
  const cardData = {
    name: popupCardTitle.value,
    link: popupCardSrc.value
  }
  const card = new Card(cardData, '#card_template');
  const cardElement = card.createCard();


  // Добавляем в DOM
  document.querySelector('.card').prepend(cardElement);
  closePopup(popupCard)
  clearPopupCard()
}


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formCardElement.addEventListener('submit', formSubmitHandler);

addCardButton.addEventListener('click', () => { openPopup(popupCard) });

//Card end ------------------

//Popup start -----------------

const editButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');

//Получаем переменный текстовых полей
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Получаем перменные текстовых полей в диалоговом окне
const popupName = document.querySelector('#name');
const popupDescription = document.querySelector('#description');

// Находим форму в DOM
const formElement = document.querySelector('.popup__form')

//Открываем диалоговое окно 
function openPopup(modelWindow) { 
  modelWindow.classList.add('popup_opened') 
  document.addEventListener('keydown', closeByEscape);
}

//Функция закрытия popup
function closePopup(modelWindow) {
  modelWindow.classList.remove('popup_opened')
  document.removeEventListener('keydown', closeByEscape);
  
}

const popups = document.querySelectorAll('.popup')

popups.forEach((popup) => {
    popup.addEventListener('click', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
            closePopup(popup)
        }
        if (evt.target.classList.contains('popup__button-close')) {
          closePopup(popup)
        }
    })
})


//Открываем диалоговое окно и записываем в него значения
function popupOpenedProfile() {
  openPopup(popupProfile)
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler(evt) {
  evt.preventDefault();

  // Эта строчка отменяет стандартную отправку формы.
  // Так мы можем определить свою логику отправки.
  // О том, как это делать, расскажем позже.
  profileName.textContent = popupName.value
  profileDescription.textContent = popupDescription.value;
  closePopup(popupProfile)
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

formElement.addEventListener('submit', formSubmitHandler);

editButton.addEventListener('click', popupOpenedProfile);

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup); 
  }
}












