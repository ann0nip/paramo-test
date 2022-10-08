import { HttpClient } from '../utils/http-client.utils';
const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon/';
const POKEMON_PER_PAGE = 20;

export const getPokemonData = async ({
    URL = DEFAULT_URL,
    limit,
    query,
    sort = 'numAsc',
    page,
}) => {
    const httpClient = new HttpClient();
    try {
        console.time('poke');
        let filteredResults;
        const { data } = await httpClient.get(URL + limit);

        if (sort === 'numDesc') {
            data.results.reverse();
        }

        if (sort === 'A-Z') {
            data.results.sort((a, b) => a.name.localeCompare(b.name));
        }

        if (sort === 'Z-A') {
            data.results.sort((a, b) => b.name.localeCompare(a.name));
        }

        if (query) {
            filteredResults = data.results.filter((p) =>
                p.name.includes(query)
            );
        } else {
            filteredResults = [...data.results];
        }

        const paginatePokemonData = filteredResults.slice(
            0,
            page * POKEMON_PER_PAGE
        );

        const pokemons = await Promise.all(
            paginatePokemonData.map(async (pokemon) => {
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
            ...data,
            results: pokemons,
        };
    } catch (error) {
        console.log(error);
    }
};