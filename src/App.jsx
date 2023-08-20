import React from "react";
import Index from "../components/FAQSection";
import Navbar from "../components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
    <Navbar />
   <main>
      <h1 className='min-h-screen grid place-items-center'>
        FrontEnd SE Assignment
        <Index />
      </h1>
    </main>
    </div>
  );
}

export default App;
