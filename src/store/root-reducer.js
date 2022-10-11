import { combineReducers } from 'redux';

import { appReducer } from './app/app.reducer';
import { pokemonReducer } from './pokemon/pokemon.reducer';
import { trainersReducer } from './trainers/trainer.reducer';

export const rootReducer = combineReducers({
    trainers: trainersReducer,
    pokemons: pokemonReducer,
    app: appReducer,
});
