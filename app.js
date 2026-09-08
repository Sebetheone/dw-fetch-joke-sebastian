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

fetch('https://rickandmortyapi.com/api/character', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => {
        return response.json();
    })
    .then(data => {
        const characters = data.results;
        const characterList = document.getElementById('character-list 1');
        characters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character.name;
            characterList.appendChild(listItem);
        });
    })
    .catch(error => {
        const characterList = document.getElementById('character-list 1');
        characterList.textContent = "Kunne ikke hente karakterer lige nu.";
        console.error("Fejl:", error);
    });

fetch('https://swapi.dev/api/people', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => {
        return response.json();
    })
    .then(data => {
        const characters = data.results;
        const characterList = document.getElementById('character-list 2');
        characters.forEach(character => {
            const listItem = document.createElement('li');
            listItem.textContent = character.name;
            characterList.appendChild(listItem);
        });
    })
    .catch(error => {
        const characterList = document.getElementById('character-list 2');
        characterList.textContent = "Kunne ikke hente karakterer lige nu.";
        console.error("Fejl:", error);
    });