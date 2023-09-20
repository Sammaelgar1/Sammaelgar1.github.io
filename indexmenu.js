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


function activeScroll(selector){
    var button = document.querySelector(selector);
    button.addEventListener('click', function(event){
        event.preventDefault();
        var page = document.querySelector('html');
        var origin = Math.max(page.scrollTop);
        console.log(origin);
        var dest = document.querySelector(this.attributes.href.value).offsetTop;
        console.log(dest);
        var counter = 0;

        var animation = setInterval(function(){
            counter++;
            page.scrollTop = origin + (dest * counter * 0.1)
            console.log(origin + (dest * counter * 0.1))
        }, 50);

        setTimeout(function(){
            clearInterval(animation);
        }, 500);
    });
}

activeScroll('a[href*=menu]');
activeScroll('a[href*=mapa]');
activeScroll('a[href*=contacto]');








