import Logo from "./Logo";

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-40 bg[hsla(0, 0%, 4%, 0.80)] backdrop-blur-lg px-1 border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 font-mono">
            <Logo />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
