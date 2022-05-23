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

// document.getElementById('call-popup').addEventListener('click', showDiv);
// let myDiv = true
// function showDiv(){
//   let isShow = document.getElementById('service');
//   if(myDiv){
//     isShow.style.display = 'none';
//     myDiv = false;
//   } else{
//     isShow.style.display = 'block';
//     myDiv = true;
//   }
// }
// Получить модальный
var modal = document.getElementById("myModal");

// Получить кнопку, которая открывает модальный
var btn = document.getElementById("myBtn");
var btnHeader = document.getElementById("myBtnHeader");

// Получить элемент <span>, который закрывает модальный
var span = document.getElementById("myClose");

// Когда пользователь нажимает на кнопку, откройте модальный
btn.onclick = function() {
  modal.style.display = "block";    
}
btnHeader.onclick = function() {
  modal.style.display = "block";    
}
// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закройте его
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}