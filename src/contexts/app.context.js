import { createContext, useEffect, useReducer } from 'react';
import { createAction } from '../utils/create-action.utils';
import trainersFile from '../trainers.json';

export const AppContext = createContext({
    favouritesList: [],
    trainers: null,
});

export const APP_ACTION_TYPES = {
    SET_TRAINERS: 'SET_TRAINERS',
    ADD_TO_FAVOURITE: 'ADD_TO_FAVOURITE',
    GET_FAVOURITES: 'GET_FAVOURITES',
};

const INITIAL_STATE = {
    favouritesList: [],
    trainers: null,
};

const appReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case APP_ACTION_TYPES.SET_TRAINERS:
            return { ...state, trainers: payload };
        case APP_ACTION_TYPES.ADD_TO_FAVOURITE:
            return { ...state, favouritesList: payload };
        default:
            throw new Error(`Unhandled type ${type} in appReducer`);
    }
};

export const AppProvider = ({ children }) => {
    const [{ trainers, favouritesList }, dispatch] = useReducer(
        appReducer,
        INITIAL_STATE
    );

    const setTrainers = (trainers) =>
        dispatch(createAction(APP_ACTION_TYPES.SET_TRAINERS, trainers));

    const addToFavourite = (pokemon) => {
        const favourites = [...favouritesList, pokemon];
        dispatch(createAction(APP_ACTION_TYPES.ADD_TO_FAVOURITE, favourites));
    };

    // TODO   Add remove favourite method.

    useEffect(() => {
        setTrainers(trainersFile);
    }, []);

    const value = {
        addToFavourite,
        favouritesList,
        trainers,
    };

    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
