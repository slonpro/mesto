import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { initialCards } from '../utils/initialCards.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'

const settings = {
  //formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_inactive',
  inputErrorClass: 'popup__input_active',
  errorClass: 'popup__form-error_active'
}

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


const enableValidatorProfile = new FormValidator(settings, '.popup__form_profile')
const enableValidatorCard = new FormValidator(settings, '.popup__form_card')

enableValidatorProfile.enableValidation();
enableValidatorCard.enableValidation();


const openedPopupProfile1 = new Popup('.popup_profile')

openedPopupProfile1.setEventListeners()

function openedPopupProfile() {

  openedPopupProfile1.openPopup()
  popupName.value = profileName.textContent;
  popupDescription.value = profileDescription.textContent;
}

const popupCard = new Popup('.popup_card')

function openedPopopCard() {
  popupCard.openPopup()
  popupCard.setEventListeners()
  enableValidatorCard.resetValidation()
}



function submitFormCard(evt) {
  evt.preventDefault();
  const card = new Card({
    name: popupCardTitle.value,
    link: popupCardSrc.value
  }, '#card_template');
  const cardElement = card.createCard();

  sectionCard.prepend(cardElement);
  popupCard.closePopup()
}

function submitFormProfile(evt) {
  evt.preventDefault();

  profileName.textContent = popupName.value
  profileDescription.textContent = popupDescription.value;
  closePopup(popupProfile)
}


formCardElement.addEventListener('submit', submitFormCard);

addCardButton.addEventListener('click', openedPopopCard);

formProfilePopup.addEventListener('submit', submitFormProfile);

editProfileButton.addEventListener('click', openedPopupProfile);


const initialCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card_template');
    const cardElement = card.createCard();
    initialCard.addItem(cardElement);
}}, '.card')

initialCard.renderItems()

