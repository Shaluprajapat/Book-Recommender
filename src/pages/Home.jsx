import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

const Home = () => {
  const { books, fetchBooks } = useContext(BookContext);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() !== "") fetchBooks(query);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">📚 Search for Books</h1>
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Enter book name..."
          className="p-2 border rounded-l-md w-64"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch} className="bg-blue-600 text-white p-2 rounded-r-md">
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.length > 0 ? books.map((book) => <BookCard key={book.id} book={book} />) : <p>No books found.</p>}
      </div>
    </div>
  );
};

export default Home;
