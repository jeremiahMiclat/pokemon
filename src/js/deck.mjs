import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

export function renderDeckContents() {
    const deckItems = getLocalStorage("pokemon-deck");
    if (deckItems && deckItems.length > 0) {
        const outputEl = document.querySelector(".deck-list");
        renderListWithTemplate(deckItemTemplate, outputEl, deckItems);

        var deckTotalContainer = document.querySelector(".deck-footer");
        deckTotalContainer.classList.remove("hide");


    } else {
        document.querySelector(".deck-list").innerHTML =
            "<p>Your deck is empty.</p>";
    }
}

function deckItemTemplate(item) {
    const newItem = `<li class="deck-card divider">
    ${item.name}
  </li>`;

    return newItem;
}

export function removeItem(itemId) {
    let deckItems = getLocalStorage("pokemon-deck");
    deckItems = deckItems.filter(function (item) {
        return item.Id !== itemId;
    });
    setLocalStorage("pokemon-deck", deckItems);
    console.log(deckItems);

}