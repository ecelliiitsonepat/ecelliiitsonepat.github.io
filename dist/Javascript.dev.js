"use strict";

/*-----------------BELOW IS PRELOADER-------------*/
var timer1;
var timer2;
var timer3;
var preloader = document.querySelector('.preloader');
/*timer1=setInterval(()=>{
    preloader.classList.add('endpreloadynev');
    setTimeout(timer1);
},4500)*/

/*timer2=setInterval(()=>{
    preloader.classList.add('endpreloadypos');
    setTimeout(timer2);
},4700)*/

timer3 = setInterval(function () {
  preloader.classList.add('endpreloadopacity');
  setTimeout(timer3);
  document.body.style.background = "white";
}, 4500);
/*-----------------ABOVE WAS PRELOADER-------------*/