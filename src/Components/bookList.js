import { useSelector, useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import AddBook from './AddBook';
import Book from './Book';

const BookList = () => {
  const book = useSelector((state) => state.book.value);
  const dispatch = useDispatch();
  const clickHandle = (id) => {
    dispatch(deleteBook({ id }));
  };

  return (
    <>
      {book.map((books) => (
        <div key={books.id} className="book-list">
          <p>{books.category}</p>
          <div className="book-desc">
            <Book title={books.title} author={books.author} />
          </div>
          <button className="remove-btn" type="button" onClick={() => clickHandle(books.id)}>
            Remove
          </button>
        </div>
      ))}
      <AddBook />
    </>
  );
};

export default BookList;
