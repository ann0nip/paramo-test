import { HttpClient } from '../utils/http-client.utils';
const DEFAULT_URL = 'https://pokeapi.co/api/v2/pokemon/';
const DEFAULT_PAGE = 1;
const DEFAULT_ORDERBY = 'numAsc';
const DEFAULT_QUERY = '';
const DEFAULT_LIMIT = 20;
const POKEMON_PER_PAGE = 20;

export const getPokemonData = async ({
    limit = DEFAULT_LIMIT,
    orderBy = DEFAULT_ORDERBY,
    page = DEFAULT_PAGE,
    query = DEFAULT_QUERY,
    URL = DEFAULT_URL,
} = {}) => {
    const httpClient = new HttpClient();
    try {
        let filteredResults;

        const { data } = await httpClient.get(`${URL}?limit=${limit}`);

        if (query) {
            filteredResults = data.results.filter((p) =>
                p.name.includes(query)
            );
        } else {
            filteredResults = [...data.results];
        }

        if (orderBy === 'numDesc') {
            filteredResults = filteredResults.reverse();
        }

        if (orderBy === 'A-Z') {
            filteredResults = filteredResults.sort((a, b) =>
                a.name.localeCompare(b.name)
            );
        }

        if (orderBy === 'Z-A') {
            filteredResults = filteredResults.sort((a, b) =>
                b.name.localeCompare(a.name)
            );
        }

        const paginatePokemonData = filteredResults.slice(
            0,
            page * POKEMON_PER_PAGE
        );

        const pokemons = await Promise.all(
            paginatePokemonData.map(async (pokemon) => {
                const { data } = await httpClient.get(pokemon.url);
                return {
                    id: data.id,
                    name: data.name,
                    image: data.sprites.other['official-artwork'].front_default,
                    types: data.types,
                };
            })
        );

        return {
            ...data,
            results: pokemons,
        };
    } catch (error) {
        console.log(error);
    }
};
