import React, { useState, useEffect } from "react";
import { searchBooks } from "./service/server";
import BookList from "./components/BookList";
import AddBookForm from "./components/AddBookForm";

const App = () => {
  const [books, setBooks] = useState(() => {
    const storedBooks = localStorage.getItem("books");
    return storedBooks ? JSON.parse(storedBooks) : [];
  });

  useEffect(() => {
    const savedBooks = JSON.parse(localStorage.getItem("books"));
    if (savedBooks) {
      setBooks(savedBooks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = async (isbn) => {
    const book = await searchBooks(isbn);
    if (book) {
      setBooks([...books, { ...book }]);
    }
  };

  const deleteBook = (id) => {
    const index = books.findIndex((book) => book[0].id === id);
    if (index !== -1) {
      const updatedBooks = [
        ...books.slice(0, index),
        ...books.slice(index + 1),
      ];
      setBooks(updatedBooks);
    }
  };

  const rateBook = (id, rating) => {
    const updatedBooks = [...books];

    const index = updatedBooks.findIndex((book) => book[0].id === id);

    if (index !== -1) {
      updatedBooks[index][0].rating = rating;
      setBooks(updatedBooks);
    }
  };

  return (
    <div
      style={{ minHeight: "100vh", marginTop: "50px" }}
      className="flex justify-center items-center m-10"
    >
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold ">Book Inventory Manager</h1>
        <AddBookForm onAdd={addBook} />
        <BookList books={books} onDelete={deleteBook} onRate={rateBook} />
        {console.log("hello", books)}
      </div>
    </div>
  );
};

export default App;
