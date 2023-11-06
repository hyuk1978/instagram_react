import './App.css';
import Home from './screens/Home';
import { Routes , Route, HashRouter } from 'react-router-dom';
import ProfileTab from './screens/ProfileTab';
import Explore from './screens/Explore';
import Reels from './screens/Reels';
import { instaUserList } from './UserListItem';

function App() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home instaUserList={instaUserList}/>} />
        {/* <Route path="/Explore" element={<Explore instaUserList={instaUserList}/>} /> */}
        <Route path="/Reels" element={<Reels instaUserList={instaUserList}/>}/>
        {/* <Route path="/ProfileTab" element={<ProfileTab instaUserList={instaUserList}/>} /> */}
      </Routes>
    </HashRouter>
  );
}

export default App;
