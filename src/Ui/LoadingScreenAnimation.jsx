import React, { useEffect, useState } from "react";

function LoadingScreenAnimation({ onComplete }) {
  const [text, setText] = useState("");

  const fullText = "Welcome, thank you for visiting my portfolio!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]); // Added empty dependency array!

  return (
    <div className=" fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5 md:px-0 sm:px-6 px-4">
      <div className="w-[665px] sm:w-[500px] max-sm:w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[96%] h-full bg-linear-to-l from-teal-400 to-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
      </div>

      <div className="mb-4 text-2xl sm:text-xl max-sm:text-base font-mono font-semibold text-center max-w-[665px] sm:max-w-[500px] max-sm:max-w-[300px]">
        {text}
        <span className="animate_blink ml-1 text-4xl sm:text-3xl max-sm:text-xl font-bold">
          |
        </span>
      </div>

      <div className="w-[665px] sm:w-[500px] max-sm:w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[96%] h-full bg-linear-to-l from-teal-400 to-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreenAnimation;
