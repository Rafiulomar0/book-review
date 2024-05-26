import PropTypes from "prop-types";
import BooksData from "../BooksData/BooksData";

const ShowReadList = ({ data }) => {
  return (
    <div className="flex flex-col gap-10">
      {data.map((book) => (
        <BooksData key={book.bookId} book={book}></BooksData>
      ))}
    </div>
  );
};

ShowReadList.propTypes = {
  data: PropTypes.array,
  setData: PropTypes.func,
  sortText: PropTypes.string,
};

export default ShowReadList;
