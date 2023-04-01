import './banner.styles.scss';
import { Fragment } from 'react';
import { ReactComponent as Bulb } from '../../assets/bulb.svg';


export const Banner = () => {
    return (
            <div className='banner-container'>
                <div className='banner-info'>
                    <div className='banner-title'>
                        <h1>Hackathon Submissions</h1>
                    </div>
                    <div className='banner-content'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                    </div>
                    <div> <button>Upload Submission</button></div>
                </div>
                <div classname = 'image-container'>
                    <Bulb className='bulb-logo' />
                </div>
            </div>
    )
}

export default Banner;