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

function App() {
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
