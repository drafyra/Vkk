/* =====================================================
   VICKY ❤️ KASHISH
   PREMIUM LOVE WEBSITE
===================================================== */


/* ================= VFX CANVAS ================= */

const canvas = document.getElementById("vfx");
const ctx = canvas.getContext("2d");

let W;
let H;

let particles = [];


function resizeCanvas(){

W = canvas.width = window.innerWidth;
H = canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);

resizeCanvas();


/* ================= HEART / SPARKLE BURST ================= */

function burst(x,y,count=18){

for(let i=0;i<count;i++){

const angle =
Math.random() * Math.PI * 2;

const speed =
1 + Math.random() * 5;

particles.push({

x:x,

y:y,

vx:Math.cos(angle) * speed,

vy:Math.sin(angle) * speed - 2,

gravity:.06,

life:80 + Math.random()*40,

age:0,

symbol:[
"♥",
"♡",
"✦",
"•"
][Math.floor(Math.random()*4)]

});

}

}


/* ================= DRAW VFX ================= */

function drawVFX(){

ctx.clearRect(0,0,W,H);

ctx.textAlign="center";

particles.forEach(p=>{

p.x += p.vx;

p.y += p.vy;

p.vy += p.gravity;

p.age++;

ctx.globalAlpha =
Math.max(0,1-p.age/p.life);

ctx.font="20px serif";

ctx.fillStyle="#ff6ba7";

ctx.fillText(
p.symbol,
p.x,
p.y
);

});

ctx.globalAlpha=1;

particles =
particles.filter(
p=>p.age<p.life
);

requestAnimationFrame(drawVFX);

}

drawVFX();


/* ================= TOUCH ANYWHERE ================= */

document.addEventListener(
"pointerdown",
function(e){

if(
e.target.closest(
"button,a,.photo,.nav"
)
){

return;

}

burst(
e.clientX,
e.clientY,
12
);

}
);


/* ================= SCROLL REVEAL ================= */

const observer =
new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{
threshold:.12
}

);


document
.querySelectorAll(".reveal")
.forEach(el=>{
observer.observe(el);
});


/* ================= LOVE TIMER ================= */

/*
   START:
   19 April 2026
   10:47 PM
*/

const loveStart =
new Date(
"2026-04-19T22:47:00"
);


function updateTimer(){

let difference =
Date.now() -
loveStart.getTime();


if(difference < 0){

difference = 0;

}


let seconds =
Math.floor(
difference / 1000
);


let days =
Math.floor(
seconds / 86400
);


seconds %= 86400;


let hours =
Math.floor(
seconds / 3600
);


seconds %= 3600;


let minutes =
Math.floor(
seconds / 60
);


seconds %= 60;


document.getElementById(
"days"
).textContent =
days;


document.getElementById(
"hours"
).textContent =
String(hours).padStart(
2,
"0"
);


document.getElementById(
"minutes"
).textContent =
String(minutes).padStart(
2,
"0"
);


document.getElementById(
"seconds"
).textContent =
String(seconds).padStart(
2,
"0"
);

}


updateTimer();

setInterval(
updateTimer,
1000
);


/* ================= LANGUAGE SWITCH ================= */

const languageButtons =
document.querySelectorAll(
".lang"
);


languageButtons.forEach(
button=>{

button.addEventListener(
"click",
()=>{

languageButtons.forEach(
b=>{
b.classList.remove(
"active"
);
}
);

button.classList.add(
"active"
);


const language =
button.dataset.lang;


document
.getElementById("letter-en")
.classList.toggle(
"hidden",
language !== "en"
);


document
.getElementById("letter-hi")
.classList.toggle(
"hidden",
language !== "hi"
);

}

);

}
);


/* ================= PHOTO INTERACTION ================= */

/*
   First tap:
   Romantic thought

   Second tap:
   Fullscreen image
*/

document
.querySelectorAll(".photo")
.forEach(photo=>{

photo.addEventListener(
"click",
()=>{

if(
!photo.classList.contains(
"thought"
)
){

photo.classList.add(
"thought"
);

burst(
window.innerWidth/2,
window.innerHeight*.6,
14
);


/* Automatically remove thought */

setTimeout(
()=>{

photo.classList.remove(
"thought"
);

},
4500
);

}

else{

document.getElementById(
"lightboxImg"
).src =
photo.dataset.src;


document.getElementById(
"lightbox"
).classList.add(
"open"
);


photo.classList.remove(
"thought"
);

}

}
);

});


/* ================= LIGHTBOX ================= */

const lightbox =
document.getElementById(
"lightbox"
);


document.getElementById(
"closeLightbox"
).onclick =
()=>{

lightbox.classList.remove(
"open"
);

};


lightbox.addEventListener(
"click",
function(e){

if(
e.target.id === "lightbox"
){

lightbox.classList.remove(
"open"
);

}

}
);


/* ================= LITTLE MESSAGES ================= */

const messages = [

"I love you. ❤️",

"Tum meri favourite notification ho. 📱❤️",

"Tumhare saath ordinary moments bhi special lagte hain.",

"Agar memories ko frame kiya ja sake, main har frame mein tumhe rakhunga.",

"Tumhari smile meri favourite little thing hai.",

"Kuch log life mein aate hain… aur phir life thodi aur beautiful lagti hai.",

"Vicky ❤️ Kashish — simple names, beautiful memories.",

"Aaj bhi, kal bhi… tumhari khushi matter karegi. ❤️"

];


let messageIndex = 0;


document.getElementById(
"nextMessage"
).addEventListener(
"click",
function(){

messageIndex++;

if(
messageIndex >= messages.length
){

messageIndex = 0;

}


document.getElementById(
"messageText"
).textContent =
messages[messageIndex];


document.getElementById(
"messageCount"
).textContent =

String(
messageIndex + 1
).padStart(
2,
"0"
)
+
" / 08";


burst(
window.innerWidth/2,
window.innerHeight*.5,
16
);

}
);


/* ================= FIREWORKS ================= */

function fireworks(){

for(
let i=0;
i<14;
i++
){

setTimeout(

()=>{

burst(
Math.random()*W,
H*(.2 + Math.random()*.5),
45
);

},

i*130

);

}

}


/* ================= SECRET SURPRISE ================= */

const surprise =
document.getElementById(
"surprise"
);


document.getElementById(
"secretBtn"
).addEventListener(
"click",
()=>{

surprise.classList.add(
"open"
);

fireworks();

}
);


document.getElementById(
"closeSurprise"
).addEventListener(
"click",
()=>{

surprise.classList.remove(
"open"
);

}
);


/* ================= FIREWORK BUTTON ================= */

document.getElementById(
"fireworksBtn"
).addEventListener(
"click",
()=>{

fireworks();

burst(
window.innerWidth/2,
window.innerHeight*.5,
100
);

}
);


/* ================= MUSIC ================= */

const music =
document.getElementById(
"music"
);


const musicButton =
document.getElementById(
"musicBtn"
);


musicButton.addEventListener(
"click",
async function(){

try{

if(
music.paused
){

await music.play();

musicButton.textContent =
"❚❚";

}

else{

music.pause();

musicButton.textContent =
"♫";

}

}

catch(error){

alert(
"Music play nahi ho raha. music folder ke andar romantic.mp3 rakho."
);

}

}
);


/* ================= FLOATING HEARTS ================= */

setInterval(

()=>{

burst(
window.innerWidth - 75,
window.innerHeight - 115,
2
);

},

1700

);