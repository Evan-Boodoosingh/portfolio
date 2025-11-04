import { useState, useEffect } from "react";
import MobileMenu from "./Ui/MobileMenu";
import Navbar from "./Ui/NavBar";
import LoadingScreenAnimation from "./Ui/LoadingScreenAnimation";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import { Contact } from "./sections/Contact";
import RevealOnScroll from "./Ui/RevealOnScroll";
import Footer from "./sections/Footer";

function App() {
  const [isLoading, setIsLoading] = useState(() => {
    // Check if user has already seen the loading animation this session
    return sessionStorage.getItem("hasSeenLoading") === "true";
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLoadingComplete = () => {
    setIsLoading(true);
    // Remember that user has seen the loading animation this session
    sessionStorage.setItem("hasSeenLoading", "true");
  };

  return (
    <>
      {!isLoading && (
        <LoadingScreenAnimation onComplete={handleLoadingComplete} />
      )}
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <RevealOnScroll>
        <Home />
      </RevealOnScroll>
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
