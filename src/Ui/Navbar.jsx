import { useEffect } from "react";
import Logo from "./Logo";
import { MdMenu } from "react-icons/md";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);
  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-40 bg-white/5 backdrop-blur-lg rounded-full border border-white/15 shadow-2xl">
      <div className="px-6">
        <div className="flex items-center justify-between h-14 font-mono">
          <Logo />

          {!isMenuOpen && (
            <div
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="text-2xl absolute right-6 z-40 md:hidden cursor-pointer font-mono hover:bg-white/10 rounded-full transition-all"
            >
              <MdMenu />
            </div>
          )}

          <div className="flex md:flex items-center">
            <div className="hidden md:flex items-center">
              <a
                href="#home"
                className="text-gray-300 text-md font-medium hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 text-md font-medium hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 text-md font-medium hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 text-md font-medium hover:text-white hover:bg-white/10 px-4 py-2 rounded-full transition-all duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
