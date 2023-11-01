import './App.css';
import Home from './screens/Home';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import ProfileTab from './screens/ProfileTab';
import Explore from './screens/Explore';
import Reels from './screens/Reels';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore/>} />
        <Route path="/Reels" element={<Reels/>}/>
        <Route path="/ProfileTab" element={<ProfileTab/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
