const baseURL = import.meta.env.VITE_SERVER_URL

export async function findPokemonTypes() {
    const response = await fetch(baseURL + `type`);

    const data = response.json();
    return data;
}

export async function getPokemonByTypes(type) {
    const response = await fetch(baseURL + `type/${type}`);
    const data = await response.json();
    const pokemons = data.pokemon;

    return pokemons;
}

export async function findPokemonByName(name) {
    const response = await fetch(baseURL + `pokemon/${name}`);
    const data = await response.json();
    return data;
}
