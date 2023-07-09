import"./deck-66c2d315.js";import{g as m,r as a,a as s}from"./utils-0d7de4f6.js";function p(e){return`<li class="pokemon-card">
    <a href="/pokemon-pages/index.html?pokemon=${e.pokemon.name}">
      ${e.pokemon.name}</a>
  </li>`}async function r(e,n){const t=document.querySelector(e),o=await m(n);console.log(o),a(p,t,o)}const c=s("type");r(".pokemons",c);
