import React from "react";
import Rating from "./Rating";

const Book = ({ book, onDelete, onRate }) => {
  if (!book) {
    return null;
  } else {
    // console.log("check", book);
  }
  const rating = book[0].rating;
  const { title, author, coverUrl, isbn, id } = book[0];
  // console.log("ssss", book[0], book, book[0].rating);
  // console.log("ss2", book[0].rating)
  return (
    <li className="bg-black max-h-50 max-w-screen flex p-4">
      <img
        src={coverUrl}
        alt={title}
        style={{ height: "150px", width: "150px" }}
      />

      <div
        style={{
          maxWidth: "200px",
          marginLeft: "0px",
        }}
      >
        <div className="ml-2 font-bold text-lg text-white mb-3">{title}</div>
        <div className="ml-2  text-white">Author: {author}</div>
        {isbn && (
          <div className="ml-2 text-white mb-1">ISBN: {isbn}</div>
        )}
        <div className=" ml-2 text-lg text-white mb-2">
          <Rating
            value={rating}
            color="#f8e825"
            size="12px"
            onRatingChange={(value) => onRate(id, value)}
          />{" "}
        </div>
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 min-w-40 ml-2 px-3 text-white rounded-sm"
        >
          Delete
        </button>{" "}
      </div>
    </li>
  );
};

export default Book;
