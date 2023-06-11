import Motus from "./motus.js";

let motus;


window.addEventListener("DOMContentLoaded", (event)=>{
    motus = new Motus()

})

document.addEventListener('keypress', (event) =>{

motus.keyBoardInput(event.key)



})