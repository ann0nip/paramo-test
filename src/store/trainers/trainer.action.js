import { TRAINERS_ACTION_TYPES } from './trainer.types';
import { createAction } from '../../utils/create-action.utils';

export const setTrainers = (trainers) =>
    createAction(TRAINERS_ACTION_TYPES.SET_TRAINERS, trainers);
