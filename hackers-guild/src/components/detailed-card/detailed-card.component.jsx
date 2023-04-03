import './detailed-card.styles.scss';
import { AiOutlineStar, AiTwotoneCalendar ,AiFillGithub,AiFillDelete } from 'react-icons/ai'; 
import {FiExternalLink } from 'react-icons/fi';
import {FaEdit} from 'react-icons/fa';
import {useSelector} from 'react-redux';


const DetailedCard = ({submission}) => {
    return (
        <div className = "body">

            <div className='detailed-card-banner'>

                    <div className='detailed-card-details'>
                        <div className = 'detailed-card-image-title'>
                                <div className='detailed-card-image'>
                                    {/* <img src={submission.coverImage} alt='submission' /> */}
                                    <img src='https://images.unsplash.com/photo-1679678691256-fa3ce50c2159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60' alt='submission' />
                                </div>
                                <div className='detailed-card-title'>
                                        {/* <h1>{submission.title}</h1> */}
                                        <h1>Submission Title</h1>
                                </div>
                        </div>
                        <div className='detailed-card-short-info'>
                            <p>Built with GPt-3, Ract nad flask plractice interviews with AI and are your next Interview</p>
                        </div>

                        <div className='detailed-card-tags'>
                            <span className='detailed-card-star'>
                                <AiOutlineStar/>
                            </span>
                            <span className='line' />
                            <span className='detailed-card-time'>
                                <AiTwotoneCalendar /> <span>12 march</span>
                            </span>
                        </div>
                    </div>

                    <div className="detailed-card-editlink">
                        <button><FaEdit/> Edit</button>
                        <button><AiFillDelete/> Delete</button>
                        
                    </div>

            </div>

            <div className="detailed-card-info">
                    <div className='detailed-card-description'>
                        <h1>Description</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div className='detailed-card-hackathon'>
                        <h3>hackathon</h3>
                        <h2> Prestige Interview Challenge</h2>

                    <div>
                            <AiTwotoneCalendar /> 24 Feb 2023 - 24 March 2023
                    </div>
                    <button><AiFillGithub/> Github</button>
                    <button><FiExternalLink/> Other Link</button>

                        

                    </div>
            </div>

        </div>
    )
}

export default DetailedCard;