import { useState } from "react";
import MobileMenu from "./Ui/MobileMenu";
import Navbar from "./Ui/NavBar";
import LoadingScreenAnimation from "./Ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={() => setIsLoading(true)} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
