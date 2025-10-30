import Navbar from "./Ui/NavBar";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="text-3xl font-bold underline">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </div>
  );
}

export default App;
