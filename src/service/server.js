import axios from "axios";

const API_BASE_URL = "https://openlibrary.org/search.json";

export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${API_BASE_URL}?q=${query}`);
    console.log("reading", response);
    const books = response.data.docs.map(async (book) => {
      const isbn = book.isbn && book.isbn[0];
      if (isbn) {
        const bookDetailsResponse = await axios.get(
          `https://openlibrary.org/isbn/${isbn}.json`,
        );
        const bookDetails = bookDetailsResponse.data;
        console.log('detail', bookDetails)
        return {
          id: bookDetails.key,
          title: bookDetails.title,
          author: book.author_name && book.author_name[0],
          coverUrl: `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`,
          isbn: isbn,
          rating: 0,
        };
      } else {
        return null;
      }
    });
    const resolvedBooks = await Promise.all(books);
    const validBooks = resolvedBooks.filter((book) => book !== null);
    return validBooks;
  } catch (error) {
    console.error("Error searching books:", error.message);
    return [];
  }
};
