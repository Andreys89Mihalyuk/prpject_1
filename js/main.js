const btn = document.querySelector('.header__nav-btn');
const header__nav = document.querySelector('.header__nav');

btn.addEventListener('click', ()=>{
   header__nav.classList.toggle('menu-open');
})

$(".header__nav-btn").on("click", function() {
   $(this).children('.menu__nav').slideToggle();
 });
