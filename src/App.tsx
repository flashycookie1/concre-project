import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Sponsors from './pages/sponsors';
import Process from './pages/process';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/sponsors' element={<Sponsors></Sponsors>}></Route>
        <Route path='/process' element={<Process></Process>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
