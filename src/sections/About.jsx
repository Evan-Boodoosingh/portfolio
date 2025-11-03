function About() {
  const skills = [
    "MongoDB",
    "Express",
    "React.js",
    "Node.js",
    "JavaScript",
    "HTML5",
    "Tailwind CSS",
    "CSS3",
    "Responsive Design",
    "Git & GitHub",
    "RESTful APIs",
    "Agile Methodologies",
  ];
  return (
    <section
      id="about"
      className="min-h-screen font-mono flex items-center justify-center py-25"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="max-w-3xl text-5xl font-semibold mb-6 bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="mb-5 p-8 rounded-3xl border-white/10 border-2">
          <p className="text-sm leading-relaxed indent-8 text-gray-300 mb-5">
            I am a Full-Stack MERN Developer whose passion is built into every
            line of code. My mastery of the MERN stack—forged in an intensive,
            full-time engineering program—has given me the confidence to deliver
            high-quality, resilient applications. I am quite simply good at what
            I do and ready to bring immediate, demonstrable value to a
            high-performing team.
          </p>
          <p className="text-sm leading-relaxed indent-8 text-gray-300 mb-5">
            My focus is on clean architecture, long-term stability, and
            maximizing value. I treat the MERN stack as an integrated system,
            prioritizing resilience and maintainability across the backend and
            the front-end. Beyond current skill, I am genuinely excited and
            eager to grow and develop my skills with new technologies, ensuring
            my work is always reliable and adheres to the highest engineering
            standards.
          </p>
          <p className="text-sm leading-relaxed indent-8 text-gray-300">
            I bring an adaptive, enthusiastic, and high-energy mindset to every
            collaboration. My value is in combining technical proficiency with a
            clear focus on the solution. I am actively seeking a team that
            thrives on challenges. I'm not looking for a job; I am looking for
            the next impossible problem where I can prove my value and grow.
          </p>
        </div>
        <div>
          <div className="rounded-xl p-6">
            <h3 className="text-3xl text-center font-bold mb-8 flex items-baseline justify-center gap-2">
              <span className="font-emoji text-3xl leading-none">💼</span>
              <span className="bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-none">
                Skills
              </span>
            </h3>
            <div className="flex justify-center flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  className="bg-blue-500/10 text-gray-300 py-0.5 px-2 rounded-full text-balance hover:bg-blue-500/20 hover:shadow-[9_2px_8px_rgba(59,130,22.46,0.2)]"
                  key={index}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
