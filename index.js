const btnEl = document.getElementById("btn");
const  text = document.querySelector("#joke");

const apiKey = "BE0PuuwQ971gkYdGQcx+JQ==mSKSywZtW5AQULJO";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke(){
    text.innerText = "Updating...";
    const response = await fetch(apiURL,options);
    const data = await response.json();
    console.log(data[0].joke);
    
    text.innerText = data[0].joke;
}


btnEl.addEventListener("click", getJoke);