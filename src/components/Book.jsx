import React from "react";
import Rating from "./Rating";

const Book = ({ book, onDelete, onRate }) => {
  if (!book) {
    return null;
  }

  let rating = "";
  if (book[0] && book[0].rating) {
    rating = book[0].rating;
  }

  let title, author, coverUrl, isbn, id;

  if (book[0]) {
    ({ title, author, coverUrl, isbn, id } = book[0]);
  }

  return (
    <>
      {book[0] && (
        <li
          style={{ maxWidth: "400px" }}
          className="bg-black max-h-50 flex flex-col md:flex-row p-4 items-center "
        >
          <img
            src={coverUrl}
            alt={title}
            className="h-36 w-36 md:h-48 md:w-48 mb-4 md:mb-0"
          />

          <div className="md:ml-4 flex flex-col justify-between w-full">
            <div className="text-lg font-bold text-white mb-3">{title}</div>
            <div className="text-white">Author: {author}</div>
            {isbn && <div className="text-white mb-1">ISBN: {isbn}</div>}
            <div className="text-lg text-white mb-2 flex items-center">
              <Rating
                value={rating}
                color="#f8e825"
                size="20px"
                onRatingChange={(value) => onRate(id, value)}
              />{" "}
            </div>
            <button
              onClick={() => onDelete(id)}
              className="bg-red-500 w-full md:w-auto mt-2 md:mt-0 px-3 py-2 text-white rounded-sm"
            >
              Delete
            </button>
          </div>
        </li>
      )}
    </>
  );
};

export default Book;
