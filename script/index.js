import { FormValidator } from './FormValidator.js'
import { Card } from './Card.js'
import { initialCards } from './initialCards.js'

const settings = {
  //formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_active',
  errorClass: 'popup__form-error_active'
}

const popupCard = document.querySelector('.popup_card');
const popupCardTitle = document.querySelector('#title');
const popupCardSrc = document.querySelector('#src');
const sectionCard = document.querySelector('.card');

const formCardElement = document.querySelector('.popup__form_card')

const addCardButton = document.querySelector('.profile__add-button');

const editProfileButton = document.querySelector('.profile__edit-button');
const popupProfile = document.querySelector('.popup_profile');
const formProfilePopup = popupProfile.querySelector('.popup__form_profile')

//Получаем переменный текстовых полей
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

//Получаем перменные текстовых полей в диалоговом окне
const popupName = document.querySelector('#name');
const popupDescription = document.querySelector('#description');

const popups = document.querySelectorAll('.popup')

const enableValidatorProfile = new FormValidator(settings, '.popup__form_profile')
const enableValidatorCard = new FormValidator(settings, '.popup__form_card')

enableValidatorProfile.enableValidation();
enableValidatorCard.enableValidation();


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

function openedPopupProfile() {
  openPopup(popupProfile)
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened')
    closePopup(openedPopup);
  }
}

function submitFormCard(evt) {
  evt.preventDefault();
  const cardData = {
    name: popupCardTitle.value,
    link: popupCardSrc.value
  }
  const card = new Card(cardData, '#card_template', openPopup);
  const cardElement = card.createCard();

  sectionCard.prepend(cardElement);
  closePopup(popupCard)
  formCardElement.reset()
  document.querySelector('#submit').classList.add(settings.inactiveButtonClass)
}

function submitFormProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value
  profileDescription.textContent = popupDescription.value;
  closePopup(popupProfile)
}

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

formCardElement.addEventListener('submit', submitFormCard);

addCardButton.addEventListener('click', () => { openPopup(popupCard) });

formProfilePopup.addEventListener('submit', submitFormProfile);

editProfileButton.addEventListener('click', openedPopupProfile);


initialCards.forEach((item) => {
  const card = new Card(item, '#card_template', openPopup);
  const cardElement = card.createCard();

  // Добавляем в DOM
  sectionCard.prepend(cardElement);
});