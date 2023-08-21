import UserSection from "./components/UserSection/UserSection";
import FAQ from "./components/FAQSection";
import Analytics from "./components/Analytics section/analytics";
import Features from "./components/Features";
import Footer from "./components/FooterSection";

import Hero from "./components/HeroSection";
function App() {
  return (
    <main>
      <Hero />
      <Features />
      <UserSection />
      <Analytics />
      <FAQ />
      <Footer />
    </main>
  );
}

export default App;
