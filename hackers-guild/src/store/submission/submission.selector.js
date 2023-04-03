import {createSelector} from 'reselect';

const selectSubmission = state => state.submission;

export const selectSubmissionList = createSelector(
    [selectSubmission],
    submission => submission.submissionList
);

export const selectFavouriteSubmissionList = createSelector(
    [selectSubmissionList],
    submissionList => submissionList.filter(submission => submission.isFavourite)
);