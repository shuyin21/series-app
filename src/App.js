
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Nav from './components/Nav'
import Login from './components/Login';
import Profile from './pages/Profile';





function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/profile' exact element={<Profile />} />
        <Route path='/login' exact element={<Login />} />


      </Routes>
    </Router>
  );
}

export default App;
