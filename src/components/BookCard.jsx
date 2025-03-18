import { useContext } from "react";
import { BookContext } from "../context/BookContext";
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";

const BookCard = ({ book }) => {
  const { addToFavorites, removeFromFavorites, favorites } = useContext(BookContext);
  const isFavorite = favorites.some((fav) => fav.id === book.id);

  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white transition transform hover:scale-105 text-center">
      <img src={book.image} alt={book.title} className="w-32 h-40 mx-auto rounded-md shadow-md" />
      <h3 className="text-lg font-semibold mt-2">{book.title}</h3>
      <p className="text-gray-500">{book.authors?.join(", ")}</p>
      
      <div className="flex justify-between items-center mt-3">
        <span className="text-green-600 font-bold">
          {book.price !== "Not Available" ? `${book.currency} ${book.price}` : "Price Not Available"}
        </span>
        <a
          href={book.buyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white p-2 rounded flex items-center"
        >
          <FaShoppingCart className="mr-2" /> Buy Now
        </a>
      </div>

      <button
        onClick={() => (isFavorite ? removeFromFavorites(book.id) : addToFavorites(book))}
        className={`p-2 rounded mt-3 flex items-center justify-center w-full ${
          isFavorite ? "bg-red-500 text-white" : "bg-gray-300 text-black"
        }`}
      >
        {isFavorite ? <FaHeart className="mr-2" /> : <FaRegHeart className="mr-2" />}
        {isFavorite ? "Remove from Favorites" : "Save to Favorites"}
      </button>
    </div>
  );
};

export default BookCard;
