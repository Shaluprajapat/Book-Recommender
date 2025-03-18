import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import BookCard from "../components/BookCard";

const Favorites = () => {
  const { favorites } = useContext(BookContext);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-4">❤️ Your Favorite Books</h1>
      {favorites.length === 0 ? (
        <p className="text-center">No favorite books added.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {favorites.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;
