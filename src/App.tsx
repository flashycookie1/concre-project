import { Routes, Route } from 'react-router-dom';
import Home from "./pages/home";
import Sponsors from './pages/sponsors';
import Process from './pages/process';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/' element={<Sponsors></Sponsors>}></Route>
      <Route path='/' element={<Process></Process>}></Route>
    </Routes>
  );
}

export default App;
