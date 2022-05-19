const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
document.getElementById('call-popup').addEventListener('click', showDiv);
let myDiv = true
function showDiv(){
  let isShow = document.getElementById('service');
  if(myDiv){
    isShow.style.display = 'none';
    myDiv = false;
  } else{
    isShow.style.display = 'block';
    myDiv = true;
  }
}