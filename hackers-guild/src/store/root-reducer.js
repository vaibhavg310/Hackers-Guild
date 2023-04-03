import {combineReducers} from 'redux';
import {submissionReducer} from './submission/submission.reducer';

export const rootReducer = combineReducers({
    submission : submissionReducer,
});