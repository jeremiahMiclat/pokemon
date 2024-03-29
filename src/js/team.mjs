import { getLocalStorage, renderListWithTemplate, setLocalStorage } from "./utils.mjs";

export function renderTeamContents() {
    const teamItems = getLocalStorage("pokemon-team");
    if (teamItems && teamItems.length > 0) {
        const outputEl = document.querySelector(".pokemons");
        renderListWithTemplate(teamItemTemplate, outputEl, teamItems);

        // var teamTotalContainer = document.querySelector(".team-footer");
        // teamTotalContainer.classList.remove("hide");


    } else {
        document.querySelector(".pokemons").innerHTML =
            "<p>Your team is empty.</p>";
    }
}

function teamItemTemplate(item) {
    const newItem = `<li class="pokemon-card">
    
    <a href="/configure/index.html?name=${item.name}" class="links"><img
    src="${item.sprites.front_default}"
    alt="Image of ${item.name}"
  /> 
    <p>${item.name}</p></a>
  </li>`;

    return newItem;
}

export function removeItem(itemId) {
    let teamItems = getLocalStorage("pokemon-team");
    teamItems = teamItems.filter(function (item) {
        return item.Id !== itemId;
    });
    setLocalStorage("pokemon-team", teamItems);
    console.log(teamItems);

}