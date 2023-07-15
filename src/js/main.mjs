import { findPokemonTypes } from "./externalServices.mjs";
import { renderListWithTemplate } from "./utils.mjs";


function pokemonTypesTemplate(pokemonType) {
    return `

        <li class="card-item">
          <a class="card-link" href="pokemon-list/index.html?type=${pokemonType.name}">
            ${pokemonType.name}
          </a>
        </li>

    `;
}


export default async function renderPokemonTypes(selector) {

    const el = document.querySelector(selector);

    const pokemonTypes = await findPokemonTypes();
    const pokemonList = pokemonTypes.results;
    renderListWithTemplate(pokemonTypesTemplate, el, pokemonList);
}
