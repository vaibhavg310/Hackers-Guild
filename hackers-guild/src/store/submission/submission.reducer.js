import { SUBMISSION_ACTION_TYPES } from "./submission.types";

export const SUBMISSION_INITIAL_STATE = {
    submissionList: [
        {
            id: 1,
            title : "Submission 1",
            summary: "This is the first submission",
            description: "This is the first submission sadkasjhdkashdhas askdhaksjdhkashd askdhsaiuydwbad sdbsamdkasdiausud sadkjhsaiduasd aksdhaksdhaskd",
            coverImage: "https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            hackathonName: "Hackathon 1",
            isFavourite: true,
            hackathonStartDate: "2021-10-10",
            hackthonEndDate: "2021-10-10",
            githubSubmissionLink: "something.com",
            otherLinks: "somethingelse.com",
            submissionTime: 1634040000000,
        },
        {
            id: 2,
            title : "Submission 2",
            summary: "This is the second submission",
            description : "This is the second submission",
            coverImage: "https://images.unsplash.com/photo-1680252111945-c80eabc8e191?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            hackathonName: "Hackathon 2",
            isFavourite: true,
            hackathonStartDate: "2018-10-11",
            hackthonEndDate: "2021-10-12",
            githubSubmissionLink: "something.com",
            otherLinks: "somethingelse.com",
            submissionTime: 1624040000000,
        },
        {
            id: 3,
            title : "Submission 3",
            summary: "This is the third submission",
            description : "This is the third submission",
            coverImage: "https://images.unsplash.com/photo-1680372669294-570f598ce2e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            hackathonName: "Hackathon 3",
            isFavourite: false,
            hackathonStartDate: "2021-11-11",
            hackthonEndDate: "2021-03-02",
            githubSubmissionLink: "something.com",
            otherLinks: "somethingelse.com",
            submissionTime: 1614040000000,
        },
        {
            id: 4,
            title : "Submission 4",
            summary: "This is the fourth submission",
            description : "This is the fourth submission",
            coverImage: "https://images.unsplash.com/photo-1647891938250-954addeb9c51?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
            hackathonName: "Hackathon 4",
            isFavourite: false,
            hackathonStartDate: "2022-10-10",
            hackthonEndDate: "2022-10-10",
            githubSubmissionLink: "something.com",
            otherLinks: "somethingelse.com",
            submissionTime: 1604040000000,
        }
    ]

};

export const submissionReducer = (state = SUBMISSION_INITIAL_STATE, action ={}) => {

    const {type, payload} = action;

    switch (type) {
        case SUBMISSION_ACTION_TYPES.SET_SUBMISSION_LIST:
            return {
                ...state,
                submissionList: payload,
            };
        default:
            return state;
    }
}