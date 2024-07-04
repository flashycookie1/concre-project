//import { useState } from 'react'
import Navbar from "./components/navbar";
import MiniGallery from "./components/minigallery";
import Hero from "./components/hero";
import NewsBoard from "./components/newsboard";

function App() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <MiniGallery></MiniGallery>
        <NewsBoard></NewsBoard>
    </>
  );
}

export default App;
