function LoadingScreenAnimation() {
  return (
    <div className=" fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center gap-5">
      <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[95%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
      </div>

      <div className="mb-4 text-2xl font-mono font-semibold">
        Glad you are here!
        <span className="animate_blink ml-1 text-xs font-bold"> | </span>
      </div>

      <div className="w-[300px] h-[3px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[95%] h-full bg-blue-500 shadow-[0_0_15px_#4179e3] animate-loading-bar"></div>
      </div>
    </div>
  );
}

export default LoadingScreenAnimation;
