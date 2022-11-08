
let menuBtn = document.querySelector('.menu-btn')
let burgerMenu = document.querySelector('.burger-menu')
let menuBtnClose = document.querySelector('.menu-btn-close')

menuBtn.addEventListener('click', function(){
	burgerMenu.classList.toggle('active');
})

menuBtnClose.addEventListener('click', function() {
  burgerMenu.classList.remove('active');
})