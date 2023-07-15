import renderPokemons from "./pokemon-list.mjs";
import { getParam } from "./utils.mjs";
import { loadHeaderFooter } from "./utils.mjs";

loadHeaderFooter();
const type = getParam("type");
renderPokemons(".pokemons", type);
