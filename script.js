"use strict"
const displayParagraph = document.getElementById("displayP");
const cBtn = document.getElementById("Cbtn");
const changeSignBtn = document.getElementById("+/-btn");
const ansBtn = document.getElementById("ansbtn");
const divideBtn = document.getElementById("/btn");
const oneBtn = document.getElementById("1btn");
const twoBtn = document.getElementById("2btn");
const threeBtn = document.getElementById("3btn");
const timesBtn = document.getElementById("*btn");
const fourBtn = document.getElementById("4btn");
const fiveBtn = document.getElementById("5btn");
const sixBtn = document.getElementById("6btn");
const plusBtn = document.getElementById("+btn");
const sevenBtn = document.getElementById("7btn");
const eightBtn = document.getElementById("8btn");
const nineBtn = document.getElementById("9btn");
const minusBtn = document.getElementById("-btn");
let numbers = [];
let num = ""
let signs = [];
let result;
let ans;
let saveNum = function(element){
    num += element.textContent
    console.log(num)
    displayParagraph.textContent = num
}
let saveSign = function(element){
    numbers.push(Number(num));
    num = ""
    signs.push(element.textContent);
    console.log(numbers)
    displayParagraph.textContent = element.textContent
}