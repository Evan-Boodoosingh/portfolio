import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg[hsla(0, 0%, 4%, 0.80)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 font-mono">
          <Logo />
          <div className="flex md:flex items-center space-x-8">
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-300 text-lg hover:text-xl hover:text-white transition-all"
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
