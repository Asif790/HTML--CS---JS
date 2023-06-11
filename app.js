/*let myPoints = 3

function add3Points(){
    myPoints += 3;
}

function remove1Point(){
    myPoints -=1;
}
add3Points();
remove1Point();
add3Points();
remove1Point();
add3Points();
console.log(myPoints)*/

let paraEl = document.getElementById("error")

let paragraph = "Something Went Wrong!!!"

function error(){
    console.log(paragraph)
    paraEl.innerText= paragraph
}