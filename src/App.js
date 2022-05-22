import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NewLoginForm from './authentication/NewLoginForm';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthContext } from './context/AuthContext';
import CoverLetter from './EmailOutputPages/CoverLetter';
import EmergencyLeave from './EmailOutputPages/EmergencyLeave';
import ForcedResignationLetter from './EmailOutputPages/ForcedResignationLetter';
import JobApplication from './EmailOutputPages/JobApplication';
import ResignationLetter from './EmailOutputPages/ResignationLetter';
import SickLeave from './EmailOutputPages/SickLeave';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import OurServices from './pages/OurServices';

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/newloginform' />
  }

  console.log('currentUser at App.js-->', currentUser);


  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path='/' element={<LandingPage currentUser={currentUser} />} />
        {/* <Route exact path='/home' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } /> */}
        <Route exact path='/newloginform' element={<NewLoginForm />} />
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/contactus' element={
          <RequireAuth>
            <ContactUs />
          </RequireAuth>
        } />
        <Route exact path='/ourservices' element={<OurServices />} />
        <Route exact path='/sickleave' element={<SickLeave />} />
        <Route exact path='/emergencyleave' element={<EmergencyLeave />} />
        <Route exact path='/resignationletter' element={<ResignationLetter />} />
        <Route exact path='/forcedresignationletter' element={<ForcedResignationLetter />} />
        <Route exact path='/jobapplication' element={<JobApplication />} />
        <Route exact path='/coverletter' element={<CoverLetter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
