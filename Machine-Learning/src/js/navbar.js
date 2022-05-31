let menuBtn = document.querySelector(".menuBtn")
let navBar = document.querySelector(".nav__container")

menuBtn.addEventListener('click',function(){
  navBar.classList.toggle("show-links")
})