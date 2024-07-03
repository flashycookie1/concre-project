//import { useState } from 'react'
import Navbar from "./components/navbar";
import MiniGallery from "./components/minigallery";
import Hero from "./components/hero";
import NewsBoard from "./components/newsboard";

function App() {
  return (
    <>
        <header>
          <Navbar></Navbar>
        </header>
        <Hero></Hero>
        {/* MiniGallery Component*/}
        <MiniGallery></MiniGallery>
        {/* NewsBoard Component */}
        <NewsBoard></NewsBoard>
    </>
  );
}

export default App;
