import RevealOnScroll from "../Ui/RevealOnScroll";

export const Contact = () => {
  return (
    <section id="contact" className="py-10 pt-32 font-mono">
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto px-4 w-full">
          <h2 className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-7 text-center leading-tight py-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <span className="bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap">
              Get In Touch
            </span>
            <span className="font-emoji text-6xl sm:text-7xl lg:text-8xl leading-none">
              ✉️
            </span>
          </h2>
          <form
            action="https://formsubmit.co/boodoosinghevan@gmail.com"
            method="POST"
            className="space-y-6"
          >
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your Name"
                required
                className="w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg font-mono placeholder-gray-400 shadow-2xl transition-all duration-300 focus:outline-none focus:border-blue-500/30 focus:shadow-[0_0_8px_rgba(59,130,246,0.2)] h-16 placeholder:text-center"
              />
            </div>
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your Email"
                required
                className="w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg font-mono placeholder-gray-400 shadow-2xl transition-all duration-300 focus:outline-none focus:border-blue-500/30 focus:shadow-[0_0_8px_rgba(59,130,246,0.2)] h-16 placeholder:text-center"
              />
            </div>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Please fill in your Message"
                required
                className="w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-4xl px-6 py-4 text-white text-lg font-mono placeholder-gray-400 shadow-2xl transition-all duration-300 focus:outline-none focus:border-blue-500/30 focus:shadow-[0_0_8px_rgba(59,130,246,0.2)] h-16 min-h-16 resize-y max-h-48 placeholder:text-center"
              />
            </div>
            <div>
              <button
                type="submit"
                style={{
                  background:
                    "linear-gradient(to right, #2dd4bf, #3b82f6, #7c3aed)",
                }}
                className="w-full text-white py-3 px-6 rounded-full hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden font-mono h-16 text-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </RevealOnScroll>
    </section>
  );
};
