import { combineReducers } from 'redux';

import { trainersReducer } from './trainers/trainer.reducer';
import { pokemonReducer } from './pokemon/pokemon.reducer';

export const rootReducer = combineReducers({
    trainers: trainersReducer,
    pokemons: pokemonReducer,
});
