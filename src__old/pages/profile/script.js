const imgUrl = new URL('../../images/profile/avatar.svg', import.meta.url).href
document.querySelector('.profile__image').src = imgUrl
