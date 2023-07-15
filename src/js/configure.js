import { getParam, getLocalStorage, setLocalStorage } from "./utils.mjs";
import { renderPokemonDetail } from "./configure.mjs";

const pokemon = getParam("name");
console.log(pokemon);
renderPokemonDetail(".pokemon", pokemon);


const form = document.getElementById("pokemon-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const newName = document.getElementById("pokemon-name").value;


    if (!isValidName(newName)) {

        return;
    }

    const team = getLocalStorage("pokemon-team") || [];
    const pokemonName = pokemon;
    const selectedPokemon = team.find(pokemon => pokemon.name === pokemonName);

    if (selectedPokemon) {
        selectedPokemon.name = newName;
        setLocalStorage("pokemon-team", team);
    }

    const queryString = `?name=${encodeURIComponent(newName)}`;
    const url = window.location.origin + window.location.pathname + queryString;
    window.location.href = url;

    form.reset();
});


function isValidName(name) {
    const nameRegex = /^[a-zA-Z\s]+$/;
    return nameRegex.test(name);
}