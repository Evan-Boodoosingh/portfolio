import profileImg from "../assets/profilepic.png";

function Home() {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15"
    >
      <div className="text-center z-10 px-4">
        <img
          className="w-[200px] border-0 mt-20 rounded-full shadow-md shadow-gray-500/70 lg:m-0 lg:w-[250px] object-cover object-bottom hover:translate-y-1 transition-all"
          src={profileImg}
          alt="profile image"
        />
      </div>
      <div className="text-center font-mono z-10 px-4">
        <h1 className="text-5xl lg:text-6xl font-semibold mb-6 px-1 bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 bg-clip-text text-transparent leading-relaxed">
          I am Evan Boodoosingh
        </h1>
        <p className="text-grey-300 text-base lg:text-lg mb-8 max-w-lg mx-auto">
          A Full-Stack MERN Developer who truly loves the art of building. I
          leveraged my diverse real-world experiences to master the MERN stack
          and turn complex ideas into clean, fully functioning web applications.
          I'm adaptive, passionate, and always focused on the solution. Let's
          talk about the next problem we're going to crush.
        </p>
      </div>
    </section>
  );
}

export default Home;
