//import { useState } from 'react'
<<<<<<< HEAD
import Navbar from "./components/navbar";
import NewsBoard from "./components/newsboard";
import Hero from "./components/hero";
=======
import { Navbar } from "./components/navbar";
import { MiniGallery } from "./components/minigallery";
import { NewsBoard } from "./components/newsboard";
>>>>>>> 9088b40e3364d79fc712e3604a3e155c29f0d0aa

function App() {
  return (
    <>
        <header>
          <Navbar></Navbar>
        </header>
<<<<<<< HEAD
        <Hero></Hero>
=======
        {/* Insert image as Backdrop */}
        <img className="background" src="src/assets/bgwtitle.svg"></img>
        {/* MiniGallery Component*/}
        <MiniGallery></MiniGallery>
        {/* NewsBoard Component */}
>>>>>>> 9088b40e3364d79fc712e3604a3e155c29f0d0aa
        <NewsBoard></NewsBoard>
    </>
  );
}

export default App;
