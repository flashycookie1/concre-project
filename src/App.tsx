import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./concrete-canoe/home";
import Sponsors from './concrete-canoe/sponsors';
import Process from './concrete-canoe/process';

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
