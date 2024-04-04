const pokeInfo = async () => {
    // grabs the value the user puts into the text box after
    // clicking the button
    var userInput = document.getElementById("input").value;
    console.log(userInput)
    // calls the pokeAPI with the user input as the pokemon name
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
    // jsonifys the response
    const data = await response.json();
    // grabs the pokemons front sprite
    console.log('image', data["sprites"]["front_default"])
    // grabs the pokemons name
    console.log('name', data["name"]);
    // Clears the text box without reloading the page
    var userInput = document.getElementById("input").value = '';
}