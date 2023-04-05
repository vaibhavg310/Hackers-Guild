import './detailed-card.styles.scss';
import { AiOutlineStar, AiTwotoneCalendar ,AiFillGithub,AiFillDelete } from 'react-icons/ai'; 
import {FiExternalLink } from 'react-icons/fi';
import {FaEdit} from 'react-icons/fa';
import {useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectSubmissionById } from '../../store/submission/submission.selector';
import { useNavigate } from 'react-router-dom';


export const checkImage = (image) => {
    if (typeof image !== 'string') {
        const url = URL.createObjectURL(image);
        return url;
    }
    return image;

  }

const DetailedCard = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const submission = useSelector(selectSubmissionById(id));


 


    const checkHTTPS = (link) => {
        if (link.includes('https://')) 
            return link;
        
        else 
            return `https://${link}`;
        
    }
    
    return (
        <div className = "body">

            <div className='detailed-card-banner'>

                    <div className='detailed-card-details'>
                        <div className = 'detailed-card-image-title'>
                                <div className='detailed-card-image'>
                                    <img src={checkImage(submission.coverImage)} alt='submission' />
                                    
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
                            <span className='detailed-card-star'>
                                <AiOutlineStar/>
                            </span>
                            <span className='line' />
                            <span className='detailed-card-time'>
                                <AiTwotoneCalendar /> <span>{submission.hackathonStartDate}</span>
                            </span>
                        </div>
                    </div>

                    <div className="detailed-card-editlink">
                        <button onClick={() => navigate(`/edit-form/${id}`)}><FaEdit/> Edit</button>
                        <button><AiFillDelete/> Delete</button>
                        
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
                    <a href={checkHTTPS(submission.githubSubmissionLink)}><button ><AiFillGithub/> Github</button></a>
                    <button><FiExternalLink/> Other Link</button>

                        

                    </div>
            </div>

        </div>
    )
}

export default DetailedCard;