import { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import { AuthContext } from './context/AuthContext';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import LandingPage from './pages/LandingPage';
import OurServices from './pages/OurServices';

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/' />
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
        <Route exact path='/home' element={<Home />} />
        <Route exact path='/aboutus' element={<AboutUs />} />
        <Route exact path='/contactus' element={<ContactUs />} />
        <Route exact path='/ourservices' element={<OurServices />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
