import { useState } from "react";
import MobileMenu from "./Ui/MobileMenu";
import Navbar from "./Ui/NavBar";
import LoadingScreenAnimation from "./Ui/LoadingScreenAnimation";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <LoadingScreenAnimation />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default App;
