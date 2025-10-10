import './App.css';
import { Routes, Route } from "react-router";


// components
import Home from './components/Home';
import Nav from './components/Nav';
import Story from './components/Story';

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
      </Routes>
    </div>
  );
}

export default App;
