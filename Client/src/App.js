import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Route , Routes } from 'react-router-dom';
import Home from './comp/Home/Home';
import Secondpage from './comp/SecondPage/Seconpage';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path ="/Secondpage" element={<Secondpage/>}/>
          
        </Routes>
    </BrowserRouter>
  );
}

export default App;
