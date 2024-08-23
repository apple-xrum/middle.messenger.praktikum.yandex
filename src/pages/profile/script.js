const imgUrl = new URL('../../images/profile/avatar.svg', import.meta.url).href
console.log(imgUrl)
document.querySelector('.profile__image').src = imgUrl