import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Footer() {
  return (
    <footer>
      <div className="min-h-[100px] flex flex-col justify-center gap-6 text-center text-lg text-gray-300 font-mono mb-10 ">
        <div className="flex gap-10 p-4 justify-center text-white ">
          <a
            href="https://www.linkedin.com/in/evan-boodoosingh/"
            className="border border-white/30 p-3 text-2xl rounded-full hover:-translate-y-2 transition-all text-white w-12 h-12 flex items-center justify-center hover:border-white/60"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://github.com/Evan-Boodoosingh"
            className="border border-white/30 p-3 text-2xl rounded-full hover:-translate-y-2 transition-all text-white w-12 h-12 flex items-center justify-center hover:border-white/60"
            target="_blank"
          >
            <FiGithub />
          </a>
        </div>
        <p>© 2025 Evan Boodoosingh. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
