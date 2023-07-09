import"./deck-66c2d315.js";import{f as t,r as s}from"./utils-0d7de4f6.js";function m(e){return`<ul><li><a href="pokemon-list/index.html?type=${e.name}">
      ${e.name}</a></li></ul>`}async function p(e){const o=document.querySelector(e),n=(await t()).results;s(m,o,n)}p(".pokemon-types");
