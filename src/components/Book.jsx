import React from "react";

const Book = ({ book, onDelete }) => {
  if (!book) {
    return null;
  } else {
    // console.log("check", book);
  }

  const { title, author, coverUrl, isbn, id } = book[0];

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
        <div className="ml-2 text-lg text-white">Author: {author}</div>
        <div className="ml-2 text-lg text-white ">Rating: </div>
        {isbn && <div className="ml-2 text-md text-white mb-1">ISBN: {isbn}</div>}
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
