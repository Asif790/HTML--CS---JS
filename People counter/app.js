let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0 ;

function increment(){
    count++;

    countEl.innerText = count;
}

function save(){
    let entries = count + " - ";
    saveEl.textContent += entries;
    countEl.textContent = 0;
    count = 0;
}
