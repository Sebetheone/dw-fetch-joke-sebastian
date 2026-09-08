const jokeElement = document.getElementById('joke');
fetch('https://icanhazdadjoke.com', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => {
        return response.json(); 
    })
    .then(data => {
        jokeElement.textContent = data.joke; 
    })
    .catch(error => {
        jokeElement.textContent = "Kunne ikke hente en joke lige nu.";
        console.error("Fejl:", error);
    });