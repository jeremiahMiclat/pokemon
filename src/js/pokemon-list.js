import renderPokemons from "./pokemon-list.mjs";
import { getParam } from "./utils.mjs";
const type = getParam("type");
renderPokemons(".pokemons", type);
