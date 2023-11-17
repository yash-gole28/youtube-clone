
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Homepage from './components/Homepage';
// import Navbar from './components/Navbar';
import './components/youtube.css'
import Newpage from './components/Newpage';
import Signin from './components/Signin';
import SingleVideo from './components/SingleVideo';
import History from './components/History';
import You from './components/You';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/newpage' element={<Newpage/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/single-video' element={<SingleVideo/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/you' element={<You/>}/>
     </Routes>
    </div>
  );
}

export default App;
