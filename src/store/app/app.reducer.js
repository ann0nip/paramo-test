import { APP_ACTION_TYPES } from './app.types';

const INITIAL_STATE = {
    page: 1,
    query: '',
};

export const appReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case APP_ACTION_TYPES.INCREMENT_CURRENT_PAGE:
            return { ...state, page: state.page + 1 };
        case APP_ACTION_TYPES.SET_SEARCH_QUERY:
            return { ...state, query: payload };
        default:
            return state;
    }
};
