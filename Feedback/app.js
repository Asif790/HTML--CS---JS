const ratingEls = document.querySelectorAll(".rating")
const btn = document.getElementById('btn')
const container = document.getElementById('container')

let selectedRating = ""
ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click" , (event) => {
        removeActive()
        selectedRating = (event.target.innerText || event.target.parentNode.innerText);
        event.target.classList.add("active")
        event.target.parentNode.classList.add("active")
    })
})

btn.addEventListener("click", () => {
    if(selectedRating !== ""){
        container.innerHTML = `
            <strong>Thank You!</strong>
            <br>
            <br>
            <strong>Feedback: ${selectedRating}</strong>
            <p>We'll use your feedback to improve our customer support.</p>
        `
    }
})

function removeActive(){
    ratingEls.forEach((ratingEl) =>{
        ratingEl.classList.remove("active")
    })
}

