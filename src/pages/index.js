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
  addCardButton,
  editProfileButton,
  popupName,
  popupDescription,
} from '../utils/constants.js'

const enableValidatorProfile = new FormValidator(settings, '.popup__form_profile')
const enableValidatorCard = new FormValidator(settings, '.popup__form_card')

enableValidatorProfile.enableValidation();
enableValidatorCard.enableValidation();

const userProfile = new UserInfo({
  selectorUserName: '.profile__name',
  selectorDescriptionUser: '.profile__description'
})

const createCard = (item) => {
  const card = new Card(item, '#card_template', handleCardClick);
  return card
}



const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleFormSumbit: ({ title, src }) => {

    const card = createCard({name: title, link: src})
    const cardElement = card.createCard();
    initialCard.addItem(cardElement, true);
    popupCard.closePopup()
  }
})
popupCard.setEventListeners()

const popupProfile = new PopupWithForm({
  popupSelector: '.popup_profile',
  handleFormSumbit: ({ name, description }) => {

    userProfile.setUserInfo({ name, description })
    popupProfile.closePopup()
  }
})
popupProfile.setEventListeners()

function handleCardClick(selector, link, name) {
  const popupImg = new PopupWithImage(selector)
  popupImg.openPopup(link, name);
  popupImg.setEventListeners()
}

addCardButton.addEventListener('click', () => {
  popupCard.openPopup()
  enableValidatorCard.resetValidation()
});


editProfileButton.addEventListener('click', () => {
  const userInfo = userProfile.getUserInfo()
  popupName.value = userInfo.username;
  popupDescription.value = userInfo.description;
  popupProfile.openPopup()
});

const initialCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = createCard(item)
    const cardElement = card.createCard();
    initialCard.addItem(cardElement, false);
  },
  containerSelector: '.card'
})

initialCard.renderItems()