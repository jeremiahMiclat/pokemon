import { findPokemonByName } from "./externalServices.mjs";
import { renderWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";

let pokemonInPage = {};

function pokemonDetailTemplate(pokemon) {
    return `<p>${pokemon.name}</p>
    <div class="product-detail__add">
    <button id="addToTeam" data-id="">Add to Team</button>
  </div>`;
}


export async function renderPokemonDetail(selector, pokemonName) {

    try {
        const el = document.querySelector(selector);

        const pokemonDetails = await findPokemonByName(pokemonName);
        pokemonInPage = pokemonDetails;
        const pokemon = pokemonDetails;
        console.log(pokemon)
        renderWithTemplate(pokemonDetailTemplate, el, pokemon);
        setTimeout(() => {
            eventListener();
        }, 1000);

    } catch (error) {
        console.log(error);
    }
}

export function eventListener() {
    document.getElementById("addToTeam").addEventListener("click", addToTeam);
}



function addToTeam() {
    const teamBtn = document.getElementById("addToTeam");
    teamBtn.disabled = true;
    setTimeout(() => {
        const team = getLocalStorage("pokemon-team") || [];
        const isDuplicate = team.some(pokemon => pokemon.name === pokemonInPage.name); // Check for duplicates

        if (!isDuplicate) {
            const updatedTeam = [...team, pokemonInPage];
            setLocalStorage("pokemon-team", updatedTeam);
        }

        else {
            alert("Already in your team");
        }

        teamBtn.disabled = false;
    }, 2000);
}

