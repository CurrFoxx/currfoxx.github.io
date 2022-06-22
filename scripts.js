"use strict";

let inp1 = document.querySelector("#textInput1");
let inp2 = document.querySelector("#textInput2");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let content = document.querySelector("#content1");

function upper(num, i) {
    for (var j = 1; j <= i; j++) {
        content.innerHTML += Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    }
    for (let n = j - 1; n < num; n++) {
        content.innerHTML += ("⠀")
    }
}
function lower(num, i) {
    for (var j = 1; j <= i; j++) {
        content.innerHTML += Math.floor(Math.random() * (1 - 0 + 1)) + 0 + "";
    }
    for (let n = j - 1; n < num; n++) {
        content.innerHTML += ("⠀")
    }
}

function Pyramid(num, beam) {
    content.innerHTML = "";

    if (num > 35) num = 35;
    if (beam > 12) beam = 12;

    for (let i = 0; i <= num; i++) {
        for (let j = 0; j < beam; j++) {
            upper(num, i);
        }
        content.innerHTML += '<br>';
    }


    for (let i = num - 1; i >= 0; i--) {
        for (let j = 0; j < beam; j++) {
            lower(num, i)
        }
        content.innerHTML += '<br>';
    }
}

btn1.addEventListener("click", function () {
    Pyramid(+inp1.value, +inp2.value);
});

btn2.addEventListener("click", function () {
    content.innerHTML = "";
});