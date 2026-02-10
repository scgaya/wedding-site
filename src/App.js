import './App.css';
import { Routes, Route } from "react-router";
// components
import Home from './components/Home';
import Nav from './components/Nav';
import Story from './components/Story';
import Venue from './components/Venue';
import Itinerary from './components/Itinerary';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import RSVP from './components/RSVP';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Preload images when app starts
    const imagesToPreload = [
      '/images/PBM_9314.jpg',
      '/images/PBM_9350.jpg',
      '/images/PBM_9261.jpg',
      '/images/PBM_9081.jpg', 
    ];

    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);

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