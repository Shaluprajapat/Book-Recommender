import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { BookProvider } from "./context/BookContext";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import { FaBook } from "react-icons/fa";

function App() {
  return (
    <BookProvider>
      <Router>
        <nav className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-4 flex justify-between shadow-lg">
          <Link to="/" className="text-lg font-bold flex items-center">
            <FaBook className="mr-2" /> 📚 Book Recommender
          </Link>
          <Link to="/favorites" className="text-lg hover:text-yellow-300 transition">❤️ Favorites</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </BookProvider>
  );
}

export default App;
