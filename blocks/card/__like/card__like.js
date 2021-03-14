let likes = document.querySelectorAll('.card__like')

for (let i = 0; i < likes.length; i++) {
  let like = likes[i];
  like.addEventListener('click', function likeget() {
    if (like.getAttribute('src') === './img/like.svg') {
      like.setAttribute('src', './img/like-active.svg')
    } else {
      like.setAttribute('src', './img/like.svg')
    }
  })
}


