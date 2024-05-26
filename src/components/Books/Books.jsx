import { useEffect, useState } from "react";
import Book from "../Book/Book";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-10 container mx-auto">
      <h1 className="text-center font-bold text-4xl">Books</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mx-auto mt-4 mb-5">
        {books.map((book) => (
          <>
            <Link key={book.bookId} to={`/books/${book.bookId - 1}`}>
              <Book key={book.bookId} book={book}></Book>
            </Link>
          </>
        ))}
      </div>
    </div>
  );
};

export default Books;
