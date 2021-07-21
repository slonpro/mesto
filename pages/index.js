import { FormValidator } from '../components/FormValidator.js'
import { Card } from '../components/Card.js'
import { initialCards } from '../utils/initialCards.js'
import Section from '../components/Section.js'
import Popup from '../components/Popup.js'
import UserInfo from '../components/UserInfo.js'
import PopupWithForm from '../components/PopupWithForm.js'
import PopupWithImage from '../components/PopupWithImage.js'
import {
  settings,
  sectionCard,
  addCardButton,
  editProfileButton,
  formProfilePopup,
  profileName,
  profileDescription,
  popupName,
  popupDescription
} from '../utils/constants.js'


const enableValidatorProfile = new FormValidator(settings, '.popup__form_profile')
const enableValidatorCard = new FormValidator(settings, '.popup__form_card')

enableValidatorProfile.enableValidation();
enableValidatorCard.enableValidation();


const userProfile = new UserInfo({ userName: profileName.textContent, desciptionUser: profileDescription.textContent })

const popupProfile = new Popup('.popup_profile')


const popupCard = new PopupWithForm({
  popupSelector: '.popup_card',
  handleFormSumbit: ({ title, src }) => {
    const card = new Card({
      name: title,
      link: src
    }, '#card_template', (handleCardClick));
    const cardElement = card.createCard();
    sectionCard.prepend(cardElement);
    popupCard.closePopup()
  }
})

popupCard.setEventListeners()

function handleCardClick(selector, link, name) {
  const popupImg = new PopupWithImage(selector, link, name)
  popupImg.openPopup();
  popupImg.setEventListeners()
}


addCardButton.addEventListener('click', () => {
  popupCard.openPopup()
  enableValidatorCard.resetValidation()
});

formProfilePopup.addEventListener('submit', (evt) => {
  evt.preventDefault();
  userProfile.setUserInfo()
  popupProfile.closePopup()
});

editProfileButton.addEventListener('click', () => {
  popupProfile.openPopup()
  popupProfile.setEventListeners()

  const userInfo = userProfile.getUserInfo()

  popupName.value = userInfo.username;
  popupDescription.value = userInfo.description;
});



const initialCard = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, '#card_template', handleCardClick);
    const cardElement = card.createCard();
    initialCard.addItem(cardElement);
  }
}, '.card')

initialCard.renderItems()