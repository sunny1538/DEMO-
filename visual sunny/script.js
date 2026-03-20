window.onload = function () {

let slides = document.querySelectorAll(".slide");
let i = 0;

function slider(){
    slides.forEach((s,index)=>{
        s.style.opacity = index===i ? "1" : "0";
    });
    i = (i+1)%slides.length;
}

slider(); // show first image immediately
setInterval(slider,4000);

};