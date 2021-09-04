const menu = document.querySelector('#menu-btn');
const navbar = document.querySelector('.navbar');

/*====== EVENTO NAVEGADOR ======*/
menu.addEventListener('click', ()=>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

window.addEventListener('scroll',()=>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
})
/*====== EVENTO NAVEGADOR ======*/

