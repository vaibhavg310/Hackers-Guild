import './detailed-card.styles.scss';
import { AiOutlineStar, AiTwotoneCalendar ,AiFillGithub,AiFillDelete,AiFillStar } from 'react-icons/ai'; 
import {FiExternalLink } from 'react-icons/fi';
import {FaEdit} from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { selectSubmissionById } from '../../store/submission/submission.selector';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSubmission, toggleFavourite } from '../../store/submission/submission.action';
import { selectSubmissionList } from '../../store/submission/submission.selector';
import { Modal } from '@mui/material'


export const checkImage = (image) => {
    if (typeof image !== 'string') {
        const url = URL.createObjectURL(image);
        return url;
    }
    return image;

  }

const DetailedCard = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const submissionList = useSelector(selectSubmissionList);

    const {id} = useParams();
    const submission = useSelector(selectSubmissionById(id));

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

 
     const toggleFavouriteSubmission = (submission) => {
        console.log(submission);
        dispatch(toggleFavourite(submission, submissionList));
    }
    


    const favourite = submission.isFavourite;
    
    return (
        <div className = "body">

            <div className='detailed-card-banner'>

                    <div className='detailed-card-details'>
                        <div className = 'detailed-card-image-title'>
                                <div className='detailed-card-image'>
                                    <img src={submission.coverImage} alt='submission' />
                                    
                                </div>
                                <div className='detailed-card-title'>
                                        <h1>{submission.title}</h1>
                                        
                                </div>
                        </div>
                        <div className='detailed-card-short-info'>
                            <p>
                                {submission.description}
                            </p>
                        </div>

                        <div className='detailed-card-tags'>
                            <span className='detailed-card-star' onClick={() => toggleFavouriteSubmission(submission)} >
                                { favourite ? <AiFillStar/> :<AiOutlineStar />}
                            </span>
                            <span className='line' />
                            <span className='detailed-card-time'>
                                <AiTwotoneCalendar /> <span>{submission.hackathonStartDate}</span>
                            </span>
                        </div>
                    </div>

                    <div className="detailed-card-editlink">
                        <button onClick={() => navigate(`/edit-form/${id}`)}><FaEdit/> Edit</button>
                        <button className='icon-button' onClick={handleOpen}><AiFillDelete/> Delete</button>
                        
                    </div>

            </div>

            <div className="detailed-card-info">
                    <div className='detailed-card-description'>
                        <h1>Description</h1>
                        <p>{submission.summary}</p>
                    </div>
                    <div className='detailed-card-hackathon'>
                        <h3>{submission.hackathonName}</h3>
                        <h2> Prestige Interview Challenge</h2>

                    <div>
                            <AiTwotoneCalendar /> 24 Feb 2023 - 24 March 2023
                    </div>
                    <a href={submission.githubSubmissionLink}><button ><AiFillGithub/> Github</button></a>
                    <button><FiExternalLink/> Other Link</button>

                        

                    </div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className='modal-container'>
                    <div className='modal-content'>
                        <h2 id="modal-title">Delete submission</h2>
                        <p id="modal-description">
                            The action is irreversible. Are you sure you want to delete this submission?
                        </p>
                    </div>

                    <div className='modal-buttons'>
                        <button className='modal-button' onClick={handleClose}>Cancel</button>
                        <button className='modal-button' onClick={() => {
                            dispatch(removeSubmission(submission, submissionList));
                            navigate('/home');
                        }}>Delete</button>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default DetailedCard;