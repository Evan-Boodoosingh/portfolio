export const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen font-mono flex items-center justify-center py-25"
    >
      <div className="max-w-2xl mx-auto px-4 w-full">
        <h2 className="w-full text-4xl md:text-5xl lg:text-5xl font-semibold mb-7 text-center leading-relaxed py-2 flex items-center justify-center gap-3">
          <span className="bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Get In Touch
          </span>
          <span className="font-emoji text-6xl leading-none">✉️</span>
        </h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Please enter your Name..."
              required
              className="w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg font-mono placeholder-gray-400 shadow-2xl transition-all duration-300 focus:outline-none focus:border-blue-500/30 focus:shadow-[0_0_8px_rgba(59,130,246,0.2)] h-16"
            />
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your Email: example@email.com"
              required
              className="w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-full px-6 py-4 text-white text-lg font-mono placeholder-gray-400 shadow-2xl transition-all duration-300 focus:outline-none focus:border-blue-500/30 focus:shadow-[0_0_8px_rgba(59,130,246,0.2)] h-16"
            />
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Please fill in your Message..."
              required
              className="w-full bg-white/5 backdrop-blur-lg border border-white/15 rounded-4xl px-6 py-4 text-white text-lg font-mono placeholder-gray-400 shadow-2xl transition-all duration-300 focus:outline-none focus:border-blue-500/30 focus:shadow-[0_0_8px_rgba(59,130,246,0.2)] h-16 resize-y"
            />
          </div>
          <div>
            <button
              type="submit"
              style={{
                background:
                  "linear-gradient(to right, #2dd4bf, #3b82f6, #7c3aed)",
              }}
              className="w-full text-white py-3 px-6 rounded-full hover:-translate-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] font-medium transition relative overflow-hidden font-mono h-16 text-xl"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};
