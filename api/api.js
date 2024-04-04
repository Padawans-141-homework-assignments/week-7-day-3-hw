const pokeInfo = async () => {
    // Try catch block since it calls to an API
    try{
        // grabs the value the user puts into the text box after
        // clicking the button
        var userInput = (document.getElementById("input").value).toLowerCase();
    
        // calls the pokeAPI with the user input as the pokemon name
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
        // jsonifys the response
        const data = await response.json();
    
        // grabs the pokemons front sprite
        const sprite = data["sprites"]["front_default"]
        // grabs the pokemons name
        const name = data["name"]
    
        // creates new div for the pokemon name output
        const pokeName = document.createElement("div");
        // puts the information in the new div
        pokeName.innerHTML = `This is the Pokemons name: ${name}`;
        // appends the info and puts it on the webpage
        document.body.appendChild(pokeName);
    
        // grabs the id in the dom and assigns the src to the sprite api location
        document.getElementById('pokeImage').src = sprite;
    
        // Clears the text box without reloading the page
        var userInput = document.getElementById("input").value = '';
    }catch {
        alert('That\'s not a Pokemon!')
    }
}