import './App.css';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';

import {Routes, Route, Outlet} from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/home' element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
