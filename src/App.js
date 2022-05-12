import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path='/login' element={<LoginPage />} />
        <Route exact path='/' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
