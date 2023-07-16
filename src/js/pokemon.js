import { renderPokemonDetail } from "./pokemonDetail.mjs";
import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();

const pokemon = getParam("pokemon");
renderPokemonDetail(".pokemon", pokemon);

