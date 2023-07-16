import { renderWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";



function pokemonDetailTemplate(pokemon) {
    console.log(pokemon)
    return `<p>Pokemon Nickname: ${pokemon.name}</p>
    <p>Pokemon Name: ${pokemon.pokemon.name}</p>
    <img
    src="${pokemon.sprites.front_default}"
    alt="Image of ${pokemon.name}" loading="lazy"
  />
    `;
}

export function renderPokemonDetail(selector, param) {
    const el = document.querySelector(selector);
    const pokemon = getLocalStorage("pokemon-team");
    const selectedPokemon = pokemon.find(pokemon => pokemon.name == param);
    renderWithTemplate(pokemonDetailTemplate, el, selectedPokemon);
}