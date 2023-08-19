import React from "react";
import Index from "../components/FAQSection";
import Analytics from "./components/Analytics section/analytics";

import Hero from "./components/HeroSection";
function App() {
  return (
    <main>
      <h1 className='min-h-screen grid place-items-center'>
        FrontEnd SE Assignment
        <Hero/>
        <Analytics/>
        <Index />
        
      </h1>
    </main>
  
  );
}

export default App;
