import pokemonArray from "./data/pokemon.js";
//console.log(pokemonArray);

const caps = (nameOfPokemon) => {
    return nameOfPokemon[0].toUpperCase() + nameOfPokemon.slice(1);
}

const cardContainer = document.querySelector(".card-container");
const showPokemon = () => {
    pokemonArray.forEach((pokemon) => {
    cardContainer.innerHTML +=
    `<div class="card">
            <img src="${pokemon.sprite}" class="card__image">
            <div class="card__content">
                <div class="card__header">${caps(pokemon.name)}</div>
                <div class="card__text">${caps(pokemon.name)} (#${pokemon.id}) is a ${caps(pokemon.types)} type pokemon.</div>
            </div>
    </div>`;
});
};
showPokemon(pokemonArray);


const filterPokemon = () => {
    const clearAll = document.querySelectorAll(".card");
    clearAll.forEach (card => {
        card.remove();
    })

    const filterName = document.querySelector("#search").value.toLowerCase();

    pokemonArray.forEach ( pokemon => {
        const card = document.createElement("div");
        const cardContainer = document.querySelector(".card-container");
            if(filterName == pokemon.name) {
                card.innerHTML = 
                `<div class="card">
                    <img src="${pokemon.sprite}" class="card__image">
                    <div class="card__content">
                        <div class="card__header">${caps(pokemon.name)}</div>
                        <div class="card__text">${caps(pokemon.name)} (#${pokemon.id}) is a ${caps(pokemon.types)} type pokemon.</div>
                    </div>
                </div>`;
            
                cardContainer.append(card);
            }
        }
    )}

    const search = () => {
        document.getElementById("search").addEventListener("click", filterPokemon)
    };