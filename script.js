"use strict";

const marwyvi = document.getElementById("marwyvi");
const kaktus = document.querySelector(".kaktus");
const lost = document.querySelector(".failed");
let scores = 0;
let score = 0;
let givi = 0;
const jump = function() {
    if (marwyvi.classList != "jump") {
        marwyvi.classList.add("jump");
        lost.classList.add("hidden");
        setTimeout(function() {
            marwyvi.classList.remove("jump");
        }, 700);
    }

    kaktus.classList.add("block");
    if (givi === 0) {
        score = setInterval(function() {
            scores++;
            console.log(scores);
        }, 100);
    } else {
        clearInterval(score);
    }
};

let isAlive = setInterval(function() {
    //marwyvi position Y
    let marwyviTop = parseInt(
        window.getComputedStyle(marwyvi).getPropertyValue("top")
    );
    //cactus position X
    let kaktusLeft = parseInt(
        window.getComputedStyle(kaktus).getPropertyValue("left")
    );

    if (marwyviTop >= 130 && kaktusLeft <= 20) {
        kaktus.classList.remove("block");
        lost.classList.remove("hidden");

        scores = 0;
        givi = 1;
    }
}, 10);

document.addEventListener("click", function() {
    jump();
});