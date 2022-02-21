
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';

import Nav from './components/Nav'

import Details from './pages/DetailsPage';
import ChannelPage from './pages/ChannelPage';

import { useSelector } from 'react-redux';




function App() {
  const channel = useSelector((state) => state.channelDetails.value);
  console.log(channel);

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Homepage />} />
        <Route path='/details' exact element={<Details />} />

        <Route path='/channel' exact element={<ChannelPage channelValue={channel} />} />


      </Routes>

    </Router>
  );
}

export default App;
