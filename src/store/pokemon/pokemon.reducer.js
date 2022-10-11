import { POKEMON_ACTION_TYPES } from './pokemon.types';

const INITIAL_STATE = {
    results: [],
};

export const pokemonReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case POKEMON_ACTION_TYPES.SET_POKEMON:
            return { ...state, results: payload };
        case POKEMON_ACTION_TYPES.SET_POKEMON_COUNT:
            return { ...state, count: payload };
        default:
            return state;
    }
};
