import { PokemonData } from '../models/response';

export const addPokemonToFav = (pokemons: PokemonData[], id: number) => {
    pokemons = pokemons.map((pokemon) => {
        if (pokemon.id === id) {
            return ({
                ...pokemon,
                checked: !pokemon.checked
            })
        }
        return pokemon;
    });
    pokemonsSelected(pokemons);
    return pokemons;
}

const pokemonsSelected = (pokemons: PokemonData[]) => {
    const favorites = pokemons.filter(pokemon => pokemon.checked).map((pokemon) => pokemon.id);
    localStorage.setItem('favoritesPokemons', JSON.stringify(favorites));
}