import { HttpClient } from '../utils/http-client.utils';
const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon/';

export const getPokemonData = async (URL = DEFAULT_URL) => {
    const httpClient = new HttpClient();
    try {
        console.time('poke');

        const { data } = await httpClient.get(URL);
        const pokemons = await Promise.all(
            data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                const pokemonData = await pokemonResponse.json();

                return {
                    id: pokemonData.id,
                    name: pokemonData.name,
                    image: pokemonData.sprites.other['official-artwork']
                        .front_default,
                    types: pokemonData.types,
                };
            })
        );

        console.timeEnd('poke');
        return {
            nextPage: data.next,
            pokemons,
        };
    } catch (error) {
        console.log(error);
    }
};
