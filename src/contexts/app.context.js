import { createContext, useEffect, useReducer, useState } from 'react';
import { createAction } from '../utils/create-action.utils';
import trainersFile from '../trainers.json';
import { getPokemonData } from '../services/pokemon.services';

export const AppContext = createContext({
    favouritesList: [],
    pokemons: [],
    trainers: null,
    page: 1,
    query: '',
});

export const APP_ACTION_TYPES = {
    SET_TRAINERS: 'SET_TRAINERS',
    SET_PAGE: 'SET_PAGE',
    SET_QUERY: 'SET_QUERY',
    ADD_POKEMON_TO_LIST: 'ADD_POKEMON_TO_LIST',
    ADD_POKEMON_TO_FAVOURITE_LIST: 'ADD_POKEMON_TO_FAVOURITE_LIST',
    GET_FAVOURITES_LIST: 'GET_FAVOURITES_LIST',
};

const INITIAL_STATE = {
    favouritesList: [],
    pokemons: [],
    trainers: null,
    page: 1,
    query: '',
};

const appReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case APP_ACTION_TYPES.SET_TRAINERS:
            return { ...state, trainers: payload };
        case APP_ACTION_TYPES.SET_PAGE:
            return { ...state, page: payload };
        case APP_ACTION_TYPES.SET_QUERY:
            return { ...state, query: payload };
        case APP_ACTION_TYPES.ADD_POKEMON_TO_FAVOURITE_LIST:
            return { ...state, favouritesList: payload };
        case APP_ACTION_TYPES.ADD_POKEMON_TO_LIST:
            return { ...state, pokemons: payload };
        default:
            throw new Error(`Unhandled type ${type} in appReducer`);
    }
};

export const AppProvider = ({ children }) => {
    const [{ trainers, favouritesList, pokemons, page, query }, dispatch] =
        useReducer(appReducer, INITIAL_STATE);
    const [count, setCount] = useState(null);

    const setTrainers = (trainers) =>
        dispatch(createAction(APP_ACTION_TYPES.SET_TRAINERS, trainers));

    const setPage = (page) =>
        dispatch(createAction(APP_ACTION_TYPES.SET_PAGE, page));

    const setQuery = (query) =>
        dispatch(createAction(APP_ACTION_TYPES.SET_QUERY, query));

    const addToFavourite = (pokemon) => {
        const favourites = [...favouritesList, pokemon];
        dispatch(
            createAction(
                APP_ACTION_TYPES.ADD_POKEMON_TO_FAVOURITE_LIST,
                favourites
            )
        );
    };

    const getPokemon = async () => {
        const props = {
            limit: count ? `?limit=${count}` : `?limit=20`,
            query,
            page,
        };
        const pokemonData = await getPokemonData(props);
        const payload = [...pokemonData.results];
        !count && setCount(pokemonData.count);
        dispatch(createAction(APP_ACTION_TYPES.ADD_POKEMON_TO_LIST, payload));
    };

    // TODO   Add remove favourite method.

    useEffect(() => {
        setTrainers(trainersFile);
    }, []);

    useEffect(() => {
        getPokemon();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, query]);

    const value = {
        addToFavourite,
        favouritesList,
        trainers,
        getPokemon,
        pokemons,
        setPage,
        page,
        setQuery,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
