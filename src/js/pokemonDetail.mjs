import { findPokemonByName } from "./externalServices.mjs";
import { renderWithTemplate, getLocalStorage, setLocalStorage } from "./utils.mjs";

let pokemonInPage = {};

function pokemonDetailTemplate(pokemon) {
    return `<p>${pokemon.name}</p>
    <div class="product-detail__add">
    <button id="addToDeck" data-id="">Add to Deck</button>
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
    document.getElementById("addToDeck").addEventListener("click", addToDeck);
}



function addToDeck() {
    // disable the btn
    const deckBtn = document.getElementById("addToDeck");
    deckBtn.disabled = true;
    setTimeout(() => {
        const deck = getLocalStorage("pokemon-deck") || [];
        const updatedDeck = [...deck, pokemonInPage];
        setLocalStorage("pokemon-deck", updatedDeck);




        // const backpackIcon = document.querySelector(".cart");
        // backpackIcon.style.animation = "backpackAnimation 0.5s";


        // const cartCountElement = document.querySelector(".item-count");
        // cartCountElement.textContent = updatedCart.length;
        // document.querySelector(".item-count").classList.remove("hide");

        // setTimeout(() => {
        //     backpackIcon.style.animation = "";
        //     removeAllAlerts();
        //     alertMessage(product.Name + "was added to cart")

        //     cartBtn.disabled = false;
        // }, 1000);
    }, 2000);

}

