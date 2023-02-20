import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import InitialPaget from '/pages/InitialPaget'
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/1' element={<Page1 />}/>
            <Route path='/2' element={<Page2 />}/>
            <Route path='/3' element={<Page3 />}/>
          </Routes>
      </BrowserRouter>     
    </div>
  );
}

export default App;
