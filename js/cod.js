"use strict";

const novoArt = document.createElement('article');
novoArt.className='mainLop';
novoArt.id='mainLop02';
const radios01=document.getElementById('radio01');
let array = [];
document.querySelector('#mainLop01').cloneNode(true).childNodes.forEach((vl,ch)=>{if(vl.length==undefined){array.push(vl)}});
array.forEach((vl)=>{novoArt.appendChild(vl)});
document.getElementById('artN').insertBefore(novoArt,radios01);
executar();
function executar() {
    const lop01 = setInterval(lop,5000);
    let numero01 = 0;
    function lop() {
        const mainlop01 = document.querySelector('#mainLop01')
        const mainlop02 = document.querySelector('#mainLop02')
        
        if (numero01 == 0 && document.querySelectorAll('.fa-circle')[0].style.color == 'rgb(28, 0, 81)') {
            mainlop01.style.cssText='transform: translate(-97vmin,0); transition: 1s;';
            document.querySelectorAll('.fa-circle')[0].style.color ="#ae94df";
            document.querySelectorAll('.fa-circle')[1].style.color = '#1C0051';
            document.querySelectorAll('.fa-circle')[1].style.transition='1.5s';
            numero01++;
            setTimeout(() => { mainlop01.style.transition= 'none' },1000);
        }else if(numero01==1) {
            mainlop01.style.cssText = 'transform: translate(-195vmin,0); transition: 1s;';
            document.querySelectorAll('.fa-circle')[1].style.color = "#ae94df";
            document.querySelectorAll('.fa-circle')[2].style.color = '#1C0051';
            document.querySelectorAll('.fa-circle')[2].style.transition = '1.5s';
            numero01++;
            mainlop02.style.cssText='transform: translate(100vim,0);'
            setTimeout(() => { mainlop01.style.transition= 'none' },1000);
        }else if(numero01==2) {
            console.log('OK')
            mainlop01.style.cssText ='transform: translate(-300vmin,0); transition: 1s;';
            mainlop02.style.cssText ='transform: translate(0vmin,0); transition: 1.1s;';
            document.querySelectorAll('.fa-circle')[2].style.color = "#ae94df";
            document.querySelectorAll('.fa-circle')[0].style.color = '#1C0051';
            document.querySelectorAll('.fa-circle')[0].style.transition = '1.5s';
            numero01++;
            setTimeout(() => { mainlop01.style.transition='none' },1000);
        }else if(numero01==3) {
            mainlop02.style.cssText = 'transform: translate(-97vmin,0); transition: 1s;';
            mainlop01.style.cssText='transform: translate(100%,0); transition: none;'
            document.querySelectorAll('.fa-circle')[0].style.color = "#ae94df";
            document.querySelectorAll('.fa-circle')[1].style.color = '#1C0051';
            document.querySelectorAll('.fa-circle')[1].style.transition = '1.5s';
            numero01++;
            setTimeout(() => { mainlop02.style.transition='none' },1000);
        }else if(numero01==4) {
            mainlop02.style.cssText = 'transform: translate(-195vmin,0); transition: 1s;';
            document.querySelectorAll('.fa-circle')[1].style.color = "#ae94df";
            document.querySelectorAll('.fa-circle')[2].style.color = '#1C0051';
            document.querySelectorAll('.fa-circle')[2].style.transition = '1.5s';
            numero01++;
            setTimeout(() => { mainlop02.style.transition='none' },1000);
        }else if(numero01==5) {
            mainlop01.style.cssText = 'transform: translate(0vmin,0); transition: .9s;';
            mainlop02.style.cssText = 'transform: translate(-300vmin,0); transition: 1s;';
            document.querySelectorAll('.fa-circle')[2].style.color = "#ae94df";
            document.querySelectorAll('.fa-circle')[0].style.color = '#1C0051';
            document.querySelectorAll('.fa-circle')[0].style.transition = '1.5s';
            numero01=0;
            setTimeout(() => { mainlop01.style.transition='none' },1000);
            setTimeout(() => { mainlop02.style.transition='none' },1000);
        }
    }
}
