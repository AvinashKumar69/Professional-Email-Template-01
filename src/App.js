import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />
  }

  console.log('currentUser at App.js-->', currentUser);


  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/' element={
          <RequireAuth>
            <Home />
          </RequireAuth>
        } />
      </Routes>
    </>
  );
}

export default App;
