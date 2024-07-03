//import { useState } from 'react'
import { Navbar } from "./components/navbar";
import { NewsBoard } from "./components/newsboard";

function App() {
  return (
    <>
      <div>
        {/* Set the header to be the NavBar */}
        <header>
          <Navbar></Navbar>
        </header>
        {/* Insert image as background */}
        <img className="background" src="src/assets/bgwtitle.svg"></img>
        {/* NewsBoard Component */}
        <NewsBoard></NewsBoard>
      </div>
    </>
  );
}

export default App;
