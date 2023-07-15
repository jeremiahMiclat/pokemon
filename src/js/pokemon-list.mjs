import { getPokemonByTypes, getPokemonsByType } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";

function pokemonCardTemplate(pokemon) {
  return `<li class="pokemon-card">
    <a href="/pokemon-pages/index.html?pokemon=${pokemon.name}">
    <img
    src="${pokemon.spriteUrl}"
    alt="Image of ${pokemon.name}"
  />
      ${pokemon.name}</a>
  </li>`;
}


export default async function renderPokemons(selector, type) {

  const el = document.querySelector(selector);

  const pokemons = await getPokemonsByType(type);
  const pokemonList = pokemons;
  console.log(pokemonList)
  renderListWithTemplate(pokemonCardTemplate, el, pokemonList);
}