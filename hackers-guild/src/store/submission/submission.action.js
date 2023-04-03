import { SUBMISSION_ACTION_TYPES } from "./submission.types";
import {createAction} from '../reducer.utils';

export const addSubmission = (submission, submissionList) => {
    const newSubmissionList = [...submissionList];
    newSubmissionList.push(submission);
    return createAction(SUBMISSION_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList)
}

export const removeSubmission = (submissionToRemove, submissionList) => {
    const newSubmissionList = submissionList.filter(submission => submission.id !== submissionToRemove.id);
    return createAction(SUBMISSION_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList)
}

export const updateSubmission = (submissionToUpdate, submissionList) => {
    const newSubmissionList = submissionList.filter(submission => submission.id !== submissionToUpdate.id);
    newSubmissionList.push(submissionToUpdate);
    return createAction(SUBMISSION_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList)
}