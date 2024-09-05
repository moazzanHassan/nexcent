
var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

var changeProperty = document.querySelector('.nav-side-menu');

var open = document.querySelector(".nav-menu-icon i"); //opening icon
var close = document.querySelector(".nav-side-icon i"); //closing icon

open.addEventListener('click', () => {
changeProperty.style.display = "block";
})
close.addEventListener('click', () => {
  changeProperty.style.display = "none";
  })
  