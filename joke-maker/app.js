const btn = document.getElementById('btn')
const joke = document.getElementById('joke')
const apiKey = "Hx2nwiljLjG5k0BPxnQAqw==Z4k3yvLBsww2Nxx4"
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
        joke.innerText = "Updating..."
        btn.disabled = true
        btn.innerText = "Loading..."
        const response =await fetch(apiURL, options)
        const data =await response.json()

        btn.disabled = false
        btn.innerText = "TELL ME A JOKE"
        joke.innerText = data[0].joke
    } catch (error) {
        joke.innerText = "An error occured, Try again later!"
        btn.disabled = false
        btn.innerText = "TELL ME A JOKE"

    }
}

btn.addEventListener("click",getJoke)