










const monthNameE1 = document.getElementById('month-name')
const dayNameE1 = document.getElementById("day-name")
const dayNumberE1 = document.getElementById("day-number")
const yearE1 = document.getElementById("year")
const date = new Date()
const month = date.getMonth()

monthNameE1.innerText = date.toLocaleString("en", { month: "long"
})
dayNameE1.innerText = date.toLocaleString("en",{
    weekday: "long"
})
dayNumberE1.innerText = date.getDate()
yearE1.innerText = date.getFullYear()










let hr = document.getElementById("hour");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

function displayTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotation = 30*hh + mm/2;
    let mRotation = 6*mm;
    let sRotation = 6*ss

    hr.style.transform = `rotate(${hRotation}deg)`;
    min.style.transform = `rotate(${mRotation}deg)`;
    sec.style.transform = `rotate(${sRotation}deg)`;


}

setInterval(displayTime, 1000);







burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')


rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', ()=>{
navList.classList.toggle('v-class-resp');
rightNav.classList.toggle('v-class-resp');
navbar.classList.toggle('h-nav-resp');


} )

const img1 = "https://picsum.photos/200/300"
const img2 = "https://picsum.photos/300/"
const img3 = "https://picsum.photos/500/"





let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');
setInterval(()=>{


let currentTime = new Date();

hh.innerHTML = currentTime.getHours();
mm.innerHTML = currentTime.getMinutes();
ss.innerHTML = currentTime.getSeconds();
},1000)


