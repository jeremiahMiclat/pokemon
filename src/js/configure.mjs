import { renderWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";



function pokemonDetailTemplate(pokemon) {
    return `<p>${pokemon.name}</p>`;
}

export function renderPokemonDetail(selector, param) {
    const el = document.querySelector(selector);
    const pokemon = getLocalStorage("pokemon-team");
    const selectedPokemon = pokemon.find(pokemon => pokemon.name == param);
    renderWithTemplate(pokemonDetailTemplate, el, selectedPokemon);
}