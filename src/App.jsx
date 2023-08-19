
import UserSection from "./components/UserSection/UserSection";

import Index from "../components/FAQSection";
import Analytics from "./components/Analytics section/analytics";
import Features from "./components/Features"

import Hero from "./components/HeroSection";
function App() {
  return (
    <main>

      <h1 className='min-h-screen grid place-items-center'>
        <Hero/>
        <Features />
        <UserSection/>
        <Analytics/>
      </h1>
    </main>
  
  );
}

export default App;
