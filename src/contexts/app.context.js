import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/create-action.utils';
import trainersFile from '../trainers.json';
import { getPokemonData } from '../services/pokemon.services';

export const AppContext = createContext({
    favouritesList: [],
    pokemons: [],
    trainers: null,
});

export const APP_ACTION_TYPES = {
    SET_TRAINERS: 'SET_TRAINERS',
    ADD_POKEMON_TO_LIST: 'ADD_POKEMON_TO_LIST',
    ADD_POKEMON_TO_FAVOURITE_LIST: 'ADD_POKEMON_TO_FAVOURITE_LIST',
    GET_FAVOURITES_LIST: 'GET_FAVOURITES_LIST',
};

const INITIAL_STATE = {
    favouritesList: [],
    pokemons: [],
    trainers: null,
};

const appReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case APP_ACTION_TYPES.SET_TRAINERS:
            return { ...state, trainers: payload };
        case APP_ACTION_TYPES.ADD_POKEMON_TO_FAVOURITE_LIST:
            return { ...state, favouritesList: payload };
        case APP_ACTION_TYPES.ADD_POKEMON_TO_LIST:
            return { ...state, pokemons: payload };
        default:
            throw new Error(`Unhandled type ${type} in appReducer`);
    }
};

export const AppProvider = ({ children }) => {
    const [{ trainers, favouritesList, pokemons }, dispatch] = useReducer(
        appReducer,
        INITIAL_STATE
    );

    const setTrainers = (trainers) =>
        dispatch(createAction(APP_ACTION_TYPES.SET_TRAINERS, trainers));

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
        const pokemonData = await getPokemonData();
        const payload = [...pokemons, ...pokemonData.pokemons];
        dispatch(createAction(APP_ACTION_TYPES.ADD_POKEMON_TO_LIST, payload));
    };

    // TODO   Add remove favourite method.

    useEffect(() => {
        setTrainers(trainersFile);

        getPokemon();
    }, []);

    const value = {
        addToFavourite,
        favouritesList,
        trainers,
        pokemons,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
