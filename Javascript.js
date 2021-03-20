/*-----------------BELOW IS PRELOADER-------------*/

let timer1
let timer2
let timer3
let preloader=document.querySelector('.preloader')
/*timer1=setInterval(()=>{
    preloader.classList.add('endpreloadynev');
    setTimeout(timer1);
},4500)*/
/*timer2=setInterval(()=>{
    preloader.classList.add('endpreloadypos');
    setTimeout(timer2);
},4700)*/
timer3=setInterval(()=>{
preloader.classList.add('endpreloadopacity');
setTimeout(timer3);
document.body.style.background="white";
},4500)

/*-----------------ABOVE WAS PRELOADER-------------*/
