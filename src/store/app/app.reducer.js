import { APP_ACTION_TYPES } from './app.types';

const INITIAL_STATE = {
    page: 1,
};

export const pageReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;

    switch (type) {
        case APP_ACTION_TYPES.INCREMENT_CURRENT_PAGE:
            return { ...state, page: state.page + 1 };
        default:
            return state;
    }
};
