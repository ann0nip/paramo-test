import { POKEMON_ACTION_TYPES } from './pokemon.types';
import { createAction } from '../../utils/create-action.utils';

export const setPokemon = (pokemon) =>
    createAction(POKEMON_ACTION_TYPES.SET_POKEMON, pokemon);

export const setPokemonCount = (count) =>
    createAction(POKEMON_ACTION_TYPES.SET_POKEMON_COUNT, count);
