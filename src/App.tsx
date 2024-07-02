//import { useState } from 'react'
import { Navbar } from "./components/navbar";

function App() {
  return (
    <>
      <div>
        {/* Set the header to be the NavBar */}
        <header>
          <Navbar></Navbar>
        </header>
      </div>

      {/* Insert image as background */}
      <img className="background" src="src/assets/bgwtitle.svg"></img>


      {/* NewsBoard Set up as a grid */}
      <div className="newsBoard">
        <div>
          <h1 className="title">
            What We're Up To
          </h1>
        </div>
        <div>
          <ul className="list-group">
            <li className="list-group-item">UConn takes 4th place overall at the ASCE Northeastern Student Symposium</li>
            <li className="list-group-item">We're currently looking for Sponsors</li>
            <li className="list-group-item">Planning for the 2024-2025 Northeastern Competition is underway</li>
          </ul>
        </div>
      </div>
      
    </>
  );
}

export default App;
