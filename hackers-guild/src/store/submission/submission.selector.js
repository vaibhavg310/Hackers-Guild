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
 
export const selectSubmissionById = (submissionId) => createSelector(
    [selectSubmissionList],
    submissionList => submissionList.find(submission => submission.id === Number(submissionId)) 
);

export const selectSubmissionIsFavourite = (submissionId) => createSelector(
    [selectSubmissionById(submissionId)],
    submission => submission.isFavourite
);
