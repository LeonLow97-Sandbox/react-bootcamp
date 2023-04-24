import { useContext } from "react";
import BooksContext from "../context/books";
import BookShow from "./BookShow";

function BookList({ books, onDelete, onEdit }) {
  const value = useContext(BooksContext);

  const renderedBooks = books.map((book) => {
    return (
      <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book} />
    );
  });

  return (
    <div className="book-list">
      {value}
      {renderedBooks}
    </div>
  );
}

export default BookList;
