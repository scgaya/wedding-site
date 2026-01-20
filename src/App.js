import './App.css';
import { Routes, Route } from "react-router";
import { preload } from 'react-dom';

// components
import Home from './components/Home';
import Nav from './components/Nav';
import Story from './components/Story';
import Venue from './components/Venue';
import Itinerary from './components/Itinerary';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import RSVP from './components/RSVP';

const preloadImages = () => {
 preload("images/PBM_9314.jpg", {
    as: "image"
  });
  preload("images/PBM_9350.jpg", {
    as: "image"
  });
};

function App() {
  preloadImages();
  return (
    <div className="App">
      <header className='App-header'>
        <Nav />
      </header>
      {/* routing of UI elements */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="story" element={<Story />} />
        <Route path="venue" element={<Venue />} />
        <Route path="itinerary" element={<Itinerary />} />
        <Route path="faqs" element={<FAQ />} />
        <Route path="contact" element={<Contact />} />
        <Route path="rsvp" element={<RSVP />} /> 
      </Routes>
    </div>
  );
}

export default App;
