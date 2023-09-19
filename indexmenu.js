const button = document.querySelector(".bars__menu");
const nav = document.querySelector(".container");
const bot = document.querySelector(".container");
const menu_menu = document.querySelector(".encendido");
const menu_mapa = document.querySelector(".encendido");
const menu_contacto = document.querySelector(".encendido");

bot.addEventListener('click',()=>{
    menu_menu.classList.toggle('encendido');
    menu_contacto.classList.toggle('encendido');
    menu_mapa.classList.toggle('encendido');
    })
    
document.querySelector(".bars__menu").addEventListener("click", animateBars);
document.querySelector(".menu_menu").addEventListener("click", animateBars);
document.querySelector(".menu_mapa").addEventListener("click", animateBars);
document.querySelector(".menu_contacto").addEventListener("click", animateBars);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

button.addEventListener('click',()=>{
    nav.classList.toggle('encendido');
    })


function animateBars(){

    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    
}





