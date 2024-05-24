import React, { useState } from "react";

const AddBookForm = ({ onAdd }) => {
  const [isbn, setIsbn] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isbn) return;
    onAdd(isbn);
    setIsbn("");
  };

  return (
    <div className="flex justify-center items-center h-screen max-h-40">
      <form onSubmit={handleSubmit} className="flex w-full max-w-md">
        <input
          type="text"
          placeholder="Enter ISBN"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          className="mr-5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm  rounded-md"
        />
        <button
          type="submit"
          className=" py-2 px-4 shadow-sm rounded-md text-white hover:bg-indigo-700 bg-indigo-500 focus:ring-2"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
