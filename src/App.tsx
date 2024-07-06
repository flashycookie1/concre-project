//import { useState } from 'react'
import Navbar from "./components/navbar";
import MiniGallery from "./components/minigallery";
import Hero from "./components/hero";
import NewsBoard from "./components/newsboard";
import Challenge from "./components/challenge";
import Sponsor from "./components/sponsor";

function App() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <MiniGallery></MiniGallery>
        <NewsBoard></NewsBoard>
        <Challenge></Challenge>
        <Sponsor></Sponsor>
    </>
  );
}

export default App;
