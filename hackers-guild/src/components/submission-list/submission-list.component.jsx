import './submission-list.styles.scss';
import SubmissionCard from '../submission-card/submission-card.component';
import {useSelector} from 'react-redux';

import { selectSubmissionList } from '../../store/submission/submission.selector';

const SubmissionList = ({favorite, submissionList}) => {
    
   if (favorite) {
        return (
            <div className='submission-list-container'>
                {
                    submissionList.map((submission) => (
                        submission.isFavourite && <SubmissionCard key={submission.id} submission={submission} />
                    ))
                }
                </div>
        )
   }

   

    console.log(submissionList);
    return (

            <div className='submission-list-container'>
                {
                    submissionList.map((submission) => (
                        <SubmissionCard key={submission.id} submission={submission} />
                    ))
                }
                </div>

       
    )
}

export default SubmissionList;