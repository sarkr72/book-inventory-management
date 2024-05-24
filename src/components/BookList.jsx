import React from "react";
import Book from "./Book";

const BookList = ({ books, onDelete, onRate }) => {
  return (
    <div className="divide-y divide-gray-500">
      {books.map((book, index) => (
        <Book
          key={`${book.id}-${index}`}
          book={book}
          onDelete={onDelete}
          onRate={onRate}
        />
      ))}
    </div>
  );
};

export default BookList;
