import { APP_ACTION_TYPES } from './app.types';

const INITIAL_STATE = {
    page: 1,
    query: '',
    orderBy: 'numAsc',
};

export const appReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case APP_ACTION_TYPES.INCREMENT_CURRENT_PAGE:
            return { ...state, page: state.page + 1 };
        case APP_ACTION_TYPES.SET_SEARCH_QUERY:
            return { ...state, query: payload };
        case APP_ACTION_TYPES.SET_ORDER_BY:
            return { ...state, orderBy: payload };
        default:
            return state;
    }
};
