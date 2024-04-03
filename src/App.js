import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Landing from './Pages/LandingPage/Landing';

import Navbar from './Components/Navbar/navbar';

 import Astrology from './Pages/Astrology/astrology';

import Poems from './Pages/Poems/poems';

 import Useless from './Pages/Useless/useless';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Landing/>}></Route>
          <Route path='/astrology' element={<Astrology/>}></Route>
          <Route path='/poems' element={<Poems/>}></Route>
          <Route path='/useless' element={<Useless/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
