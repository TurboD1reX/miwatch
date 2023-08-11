function zegar(){
let czas=new Date();
let g = czas.getHours();
let m = czas.getMinutes();
let s = czas.getSeconds();
let zegar = document.getElementById("zegar") ;
if(g<10){g="0"+g;}
if(m<10){m="0"+m;}
if(s<10){s="0"+s;}
g.toString();
m.toString();
s.toString();
setTimeout("zegar()",1000)
zegar.innerHTML=`${g}:${m}:${s}`;
kolor = `#${g}${m}${s}`
zegar.style.textShadow = `3px 3px ${kolor}`
}
function data(){
let czas=new Date();
let tyg = czas.getDay();
let d = czas.getDate();
if(d<10){d="0"+d;}
let mies = czas.getMonth()+1;
if(mies<10){mies="0"+mies;}
let rok = czas.getFullYear();
if (tyg == 1){tyg="Pon"}
if (tyg == 2) {tyg="Wt"}
if (tyg == 3) {tyg="Sr"}
if (tyg == 4){tyg="Czw"}
if (tyg == 5){tyg="Pt"}
if (tyg == 6) {tyg="Sob"}
if (tyg == 0) {tyg="Ndz"}
let data = document.getElementById("data") ;
tyg.toString();
d.toString();
mies.toString();
rok.toString();
data.innerHTML=`${d}.${mies}.${rok} ${tyg}`;
kolor = `#${mies}${rok}`
data.style.textShadow = `3px 3px ${kolor}`
}
function miband(){
let puls = document.querySelector("#puls");
let steps = document.querySelector("#steps");
let data = document.querySelector("#data")
let zegar = document.querySelector("#zegar")
let battery = document.querySelector("#battery-2");
let credit = document.querySelector("#credit-card");
let gears = document.querySelector("#gears");
let commenting = document.querySelector("#commenting")
steps.style.visibility = "visible";
puls.style.visibility = "visible";
credit.style.visibility = "visible";
battery.style.visibility = "visible";
commenting.style.visibility = "visible";
gears.style.visibility = "visible";
zegar.style.color = "white";
data.style.color = "white";
}
function load(){document.location.reload();
}

function img() {
miband =  document.getElementById("miband");
miband.innerHTML = '<img src="call.jpg" id="img" onmouseover="load()">';
img = document.getElementById("img");
miband.style.backgroundColor = "rgb(30,30,30)"
img.style.marginLeft = "100px";
img.style.borderRadius = "40%";
img.style.paddingTop = "65px";

}

zegar();
data();


function like(){
    filmik = document.getElementById("filmik");
    filmik.style.backgroundImage = "linear-gradient(to right,green,#004d00)"
    setTimeout(function() { 
        alert("Dziekuje za polubienie!");
      }, 10);
}
function dislike(){
    filmik = document.getElementById("filmik");
    filmik.style.backgroundImage = "linear-gradient(to right,red,#4d0000)"
    setTimeout(function() { 
        alert("Nastepnym razem postaram sie lepiej!");
      }, 1);

}
