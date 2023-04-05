import './App.css';
import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import DetailedCard from './components/detailed-card/detailed-card.component';
import {Routes, Route, Outlet} from 'react-router-dom';
import {DetailedRoute} from './routes/detailed-route/detailed-route.component';
import { UploadSubmissionForm } from './components/upload-submission-form/upload-submission-form-component';
import { EditFormRoute } from './routes/edit-form.routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/home' element={<Home/>}/>
        <Route path='/submissions/*' element={<DetailedRoute/>}/>
        <Route path='/upload' element={<UploadSubmissionForm/>}/>
        <Route path='/edit-form/*' element={<EditFormRoute/>}/>
      </Route>
    </Routes>
  );
}

export default App;
