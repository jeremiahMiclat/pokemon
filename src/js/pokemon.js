import { renderPokemonDetail } from "./pokemonDetail.mjs";
import { getParam } from "./utils.mjs";

const pokemon = getParam("pokemon");
renderPokemonDetail(".pokemon", pokemon);

