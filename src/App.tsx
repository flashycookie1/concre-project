//import { useState } from 'react'
import { Navbar } from "./components/navbar";
import { MiniGallery } from "./components/minigallery";
import { NewsBoard } from "./components/newsboard";

function App() {
  return (
    <>
      <div>
        {/* Set the header to be the NavBar */}
        <header>
          <Navbar></Navbar>
        </header>
        {/* Insert image as Backdrop */}
        <img className="background" src="src/assets/bgwtitle.svg"></img>
        {/* MiniGallery Component*/}
        <MiniGallery></MiniGallery>
        {/* NewsBoard Component */}
        <NewsBoard></NewsBoard>
      </div>
    </>
  );
}

export default App;
