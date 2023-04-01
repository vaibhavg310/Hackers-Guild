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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    </div>
                    <div > <button className='upload-button'>Upload Submission</button></div>
                </div>
                <div className = 'image-container'>
                    <Bulb className='bulb-logo' />
                </div>
            </div>
    )
}

export default Banner;