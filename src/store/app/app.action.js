import { APP_ACTION_TYPES } from './app.types';
import { createAction } from '../../utils/create-action.utils';

export const incrementPage = () =>
    createAction(APP_ACTION_TYPES.INCREMENT_CURRENT_PAGE);
