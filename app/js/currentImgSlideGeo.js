window.addEventListener('DOMContentLoaded', () => {
  const langGeo = document.querySelector('html');
  let currentlangGeo = langGeo.getAttribute('lang')

  const slideImg = document.querySelectorAll('.slide-img');
  console.log(slideImg);

  currentlangGeo == 'es' ? currentImg(currentlangGeo, slideImg) : '';
  currentlangGeo == 'pt' ? currentImg(currentlangGeo, slideImg) : '';
  currentlangGeo == 'gr' ? currentImg(currentlangGeo, slideImg) : '';
  currentlangGeo == 'it' ? currentImg(currentlangGeo, slideImg) : '';

  if (!currentlangGeo == 'es' && !currentlangGeo == 'pt' && !currentlangGeo == 'gr' && !currentlangGeo == 'it') {
    slideImg.forEach((el, i) => {
      el.src = `./images/dest/reviews/other/item-${i+1}.jpg`
    })
  }
});

function currentImg(lang, imgs, ) {
  imgs.forEach((el, i) => {
    el.src = `./images/dest/reviews/${lang}/item-${i+1}.jpg`
  })
}