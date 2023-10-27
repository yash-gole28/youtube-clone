
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import './components/youtube.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>}/>
     </Routes>
    </div>
  );
}

export default App;
