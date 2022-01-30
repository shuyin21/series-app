
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Nav from './components/Nav'





function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Homepage />} />

      </Routes>
    </Router>
  );
}

export default App;
