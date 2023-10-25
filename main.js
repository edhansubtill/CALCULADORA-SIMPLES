// main.js

let display =document.getElementById ('display');
let currentlnput = "";

function appendToDisplay(value) {
    currentlnput += value;
    display.value = currentlnput;
}

function clearDisplay() {
    currentlnput = "";
    display.value = "";
}

function clearDisplay() {
     try {
eval(currentlnput);
         display.value = currentlnput;
     } catch (error) {
         display.value = "Erro";
     }
}