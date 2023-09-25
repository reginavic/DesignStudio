const items = document.querySelectorAll ('.item');
items.forEach (item =>{
    item. addEventListener('mouseover',() => {
    removeFocus();
    item.classList.add('selected');
})
removeFocus = () => {
    items.forEach (item => {
    item.classList.remove('selected');
    })
}
})
const back = document.querySelector("#back");
const next = document.querySelector("#next");
const photos = ["1.jpg","2.jpg","3.jpg","5.jpg","6.jpg","7.jpg","12.jpg","13.jpg","14.jpg","16.jpg","17.jpg","18.jpg"];
let i=0;
next.addEventListener("click",() => {
    i++;
    if (i > photos.length-1) {
        i=0;
    }
    document.querySelector("#pictures").src=photos[i];
})
back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i=photos.length-1;
    }
    document.querySelector("#pictures").src=photos[i];
})

function studioCountdown() {
    const studioDate = new Date("December 12, 2024 00:00");
    const now = new Date();
    const diff = studioDate - now;

    const msInSecond = 1000; 
    const msInMinute = 60 * 1000; 
    const msInHour = 60 * 60 * 1000; 
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay =  Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
    document.querySelector(".days").textContent = 0;
    document.querySelector(".hours").textContent = 0;
    document.querySelector(".minutes").textContent = 0;
    document.querySelector(".seconds").textContent = 0;
    clearInterval(timerID);
    designStudio();
    }
}
let timerID = setInterval(studioCountdown, 1000);
function designStudio() {
    const heading = document.querySelector("h1");
    heading.textContent = "We are finally open!!!";
    heading.classList.add("DS");
}


