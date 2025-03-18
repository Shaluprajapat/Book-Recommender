import { createContext, useState } from "react";
import axios from "axios";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const fetchBooks = async (query) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      );

      const booksData = response.data.items?.map((book) => ({
        id: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || ["Unknown"],
        image: book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/128x193",
        price: book.saleInfo?.retailPrice?.amount || "Not Available",
        currency: book.saleInfo?.retailPrice?.currencyCode || "",
        buyLink: book.saleInfo?.buyLink || "#",
      }));

      setBooks(booksData || []);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const addToFavorites = (book) => {
    setFavorites([...favorites, book]);
  };

  const removeFromFavorites = (id) => {
    setFavorites(favorites.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, fetchBooks, favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </BookContext.Provider>
  );
};
