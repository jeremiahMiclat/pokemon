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
    const response = await fetch(baseURL + `pokemon-form/${name}`);
    const data = await response.json();
    return data;
}


export async function getPokemonsByType(type) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
        const data = await response.json();

        const pokemonList = [];

        for (const pokemon of data.pokemon) {
            const pokemonName = pokemon.pokemon.name;
            const pokemonResponse = await fetch(pokemon.pokemon.url);
            const pokemonData = await pokemonResponse.json();
            const spriteUrl = pokemonData.sprites.front_default;

            pokemonList.push({
                name: pokemonName,
                spriteUrl: spriteUrl,
            });
        }

        return pokemonList;
    } catch (error) {
        console.log(error);
        return [];
    }
}