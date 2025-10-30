import { RxCross2 } from "react-icons/rx";

function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={` fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      } `}
    >
      <button onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>
    </div>
  );
}

export default MobileMenu;
