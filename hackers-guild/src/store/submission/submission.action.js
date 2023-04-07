import { SUBMISSION_ACTION_TYPES } from "./submission.types";
import {createAction} from '../reducer.utils';


const getTime = () => {
    const date = new Date();
    return date.getTime();
}

export const addSubmission = (submission, submissionList) => {
    const newSubmissionList = [...submissionList];
    console.log(newSubmissionList);
    const newSubmission = {
    id: newSubmissionList ? newSubmissionList[newSubmissionList.length - 1].id + 1 : 1,
    githubSubmissionLink: submission.githubLink,
    isFavourite: false,
    coverImage: submission.coverImage,
    description: submission.description,
    title: submission.title,
    otherLinks: submission.otherLink,
    hackathonName: submission.hackathonName,
    hackathonStartDate: submission.hackathonStartDate,
    hackathonEndDate: submission.hackathonEndDate,
    summary: submission.summary,
    submissionTime: getTime(),
    };
    
    newSubmissionList.push(newSubmission);
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

export const toggleFavourite = (submission, submissionList) => {
    const newSubmissionList = [...submissionList];
    const submissionIndex = newSubmissionList.findIndex(sub => sub.id === submission.id);
    console.log(submission.id, submissionIndex);
    newSubmissionList[submissionIndex].isFavourite = !newSubmissionList[submissionIndex].isFavourite;
    return createAction(SUBMISSION_ACTION_TYPES.SET_SUBMISSION_LIST, newSubmissionList)
}

export const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
        // Check if file is of type File
        if (!(file instanceof File)) {
            resolve(file);
        }
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
}