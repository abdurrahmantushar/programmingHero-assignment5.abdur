
import { Navbar } from "./components/Navbar"
import { HeroSection } from "./components/HeroSection"
import { TechnologySection } from "./components/TechnologySection"
import { Footer } from "./components/Footer";


function App() {

  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <TechnologySection />
      </main>
      <Footer/>
    </>
  );
};


export default App
