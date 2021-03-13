//Реализация откртия и закрытия всплывающего окна
let editButton = document.querySelector('.profile__edit-button');
let popupOpen = document.querySelector('.popup');
let popupCloseButton = document.querySelector('.popup__button-close');
let popupWindow = document.querySelector('.popup__window');
//Получаем переменный текстовых полей
let name = document.querySelector('.profile__name');
let popupName = document.querySelector('.popup__name');

function popupOpened() {
  popupOpen.classList.add('popup_opened');
  
}

function popupClose() {
  popupOpen.classList.remove('popup_opened');
}



editButton.addEventListener('click', popupOpened); 

popupWindow.addEventListener('click', function(event) {
  event.stopImmediatePropagation();
});

popupOpen.addEventListener('click', popupClose);
popupCloseButton.addEventListener('click', popupClose);

// --------------------------------------------------------





popupName.in
console.log(name)
