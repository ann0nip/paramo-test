import { combineReducers } from 'redux';

import { trainersReducer } from './trainers/trainer.reducer';
import { pokemonReducer } from './pokemon/pokemon.reducer';
import { pageReducer } from './app/app.reducer';

export const rootReducer = combineReducers({
    trainers: trainersReducer,
    pokemons: pokemonReducer,
    page: pageReducer,
});
