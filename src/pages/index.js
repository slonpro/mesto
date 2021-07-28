import './index.css';

import { FormValidator } from '../components/FormValidator'
import { Card } from '../components/Card.js'
import { initialCards } from '../utils/initialCards.js'
import Section from '../components/Section.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import {
  settings,
  sectionCard,
  addCardButton,
  editProfileButton,
  profileName,
  profileDescription,
  popupName,
  popupDescription,
} from '../utils/constants.js'

const enableValidatorProfile = new FormValidator(settings, '.popup__form_profile')
const enableValidatorCard = new FormValidator(settings, '.popup__form_card')

enableValidatorProfile.enableValidation();
enableValidatorCard.enableValidation();

const userProfile = new UserInfo({
  userName: profileName.textContent,
  desciptionUser: profileDescription.textContent,
  selectorUserName: '.profile__name',
  selectorDescriptionUser: '.profile__description'
})

const userInfo = userProfile.getUserInfo()

const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleFormSumbit: ({ title, src }) => {

    const card = new Card({
      name: title,
      link: src
    }, '#card_template', handleCardClick);
    const cardElement = card.createCard();
    initialCard.addItem(cardElement, true);
    popupCard.closePopup()
  }
})
popupCard.setEventListeners()

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSumbit: ({ name, description }) => {
    userInfo.username = name
    userInfo.description = description
    userProfile.setUserInfo({ name, description })
    popupProfile.closePopup()
  }
})
popupProfile.setEventListeners()

function handleCardClick(selector, link, name) {
  const popupImg = new PopupWithImage(selector, link, name)
  popupImg.openPopup();
  popupImg.setEventListeners()
}

addCardButton.addEventListener('click', () => {
  popupCard.openPopup()
  enableValidatorCard.resetValidation()
});


editProfileButton.addEventListener('click', () => {
  popupName.value = userInfo.username;
  popupDescription.value = userInfo.description;
  popupProfile.openPopup()
});

const initialCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card_template', handleCardClick);
    const cardElement = card.createCard();
    initialCard.addItem(cardElement, false);
  },
  containerSelector: '.card'
})

initialCard.renderItems()