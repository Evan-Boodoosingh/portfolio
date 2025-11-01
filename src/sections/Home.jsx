import profileImg from "../assets/profilepic.png";

function Home() {
  return (
    <section
      id="#home"
      className="min-h-screen flex flex-col justify-center items-center lg:flex-row-reverse gap-9 lg:gap-15"
    >
      <div className="text-center z-10 px-4">
        <img className="w-[200px] border-0 mt-20 rounded-full shadow-lg shadow-gray-500/70 lg:m-0 lg:max-w[250px] object-cover object-bottom hover:translate-y-1 transition-all" src={profileImg} alt="profile image" />
      </div>
    </section>
  );
}

export default Home;
