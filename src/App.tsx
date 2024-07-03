//import { useState } from 'react'
import Navbar from "./components/navbar";
import NewsBoard from "./components/newsboard";
import Hero from "./components/hero";

function App() {
  return (
    <>
        <header>
          <Navbar></Navbar>
        </header>
        <Hero></Hero>
        <NewsBoard></NewsBoard>
    </>
  );
}

export default App;
