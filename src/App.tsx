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

      </div>
      
    </>
  );
}

export default App;
