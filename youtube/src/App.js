
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Homepage from './components/Homepage';
// import Navbar from './components/Navbar';
import './components/youtube.css'
import Newpage from './components/Newpage';
import Signin from './components/Signin';

function App() {
  return (
    <div className="App">
      
     <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/newpage' element={<Newpage/>}/>
      <Route path='/signin' element={<Signin/>}/>
     </Routes>
    </div>
  );
}

export default App;
