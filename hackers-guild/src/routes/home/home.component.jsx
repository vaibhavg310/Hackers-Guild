import './home.styles.scss';
import Banner from '../../components/banner/banner.component';
import SearchAppBar from '../../components/navbar/navbar.component';

export const Home = () => {
    return (
        <div className='home-container'>
            <Banner />
            <div className='submissions' >
                <SearchAppBar />
            </div>
        </div>
    )
}

export default Home;