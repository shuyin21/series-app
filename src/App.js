
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Nav from './components/Nav'
import Login from './components/Login';
import Details from './pages/DetailsPage';
import ChannelPage from './pages/ChannelPage';






function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/details' exact element={<Details />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='/channel' exact element={<ChannelPage />} />


      </Routes>

    </Router>
  );
}

export default App;
