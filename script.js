import pokemonArray from "./data/pokemon.js";
//console.log(pokemonArray);

const cardContainer = document.querySelector(".card-container");
const showPokemon = () => {
    pokemonArray.forEach((pokemon) => {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1).toLowerCase();
    const types = pokemon.types.join(" & ");
    cardContainer.innerHTML +=
    `<div class="card">
            <img src="${pokemon.sprite}" class="card__image">
            <div class="card__content">
                <div class="card__header">${name}</div>
                <div class="card__text">${name} (#${pokemon.id}) is a ${types} type pokemon.</div>
            </div>
    </div>`;
});
};
showPokemon(pokemonArray);
