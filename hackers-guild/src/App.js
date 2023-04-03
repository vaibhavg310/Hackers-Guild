import './App.css';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import DetailedCard from './components/detailed-card/detailed-card.component';
import {Routes, Route, Outlet} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/upload' element={<DetailedCard/>}/>
      </Route>
    </Routes>
  );
}

export default App;
