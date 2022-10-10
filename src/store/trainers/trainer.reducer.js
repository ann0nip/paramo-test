import { TRAINERS_ACTION_TYPES } from './trainer.types';

const INITIAL_STATE = {
    trainers: null,
};

export const trainersReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case TRAINERS_ACTION_TYPES.SET_TRAINERS:
            return { ...state, trainers: payload };
        default:
            return state;
    }
};
