import { checkPropTypes } from "prop-types";
import Tags from "../Tags/Tags";
import { FiMapPin } from "react-icons/fi";
import { MdOutlineContactPage } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";

const BooksData = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    tags,
    yearOfPublishing,
    publisher,
    totalPages,
    categories,
    rating,
  } = book;
  return (
    <div className="flex flex-col lg:flex-row p-5 border-2 rounded-xl items-center lg:items-start justify-center lg:justify-start lg:gap-10 gap-5">
      <div className="bg-gray-200 p-6 rounded-2xl">
        <img src={image} alt="" className="w-52" />
      </div>
      <div className="space-y-5 w-full">
        <h2 className="text-3xl font-semibold">{bookName}</h2>
        <h3 className="text-lg font-semibold text-gray-500">By: {author}</h3>
        <div className="flex flex-col lg:flex-row gap-5">
          <span className="text-md flex space-x-2 items-center">
            <span className="text-lg font-bold flex items-center">Tags:</span>
            {tags.map((item, index) => (
              <Tags key={index} text={"#" + item}></Tags>
            ))}
          </span>
          <span className="text-lg font-semibold flex items-center gap-3">
            <FiMapPin className="text-2xl" /> Year Of publishing :
            {yearOfPublishing}
          </span>
        </div>
        <span className="divider"></span>
        <div className="flex flex-row gap-5">
          <span className="flex items-center gap-2 font-semibold text-gray-500">
            <FaUser className="text-xl" /> Publisher: {publisher}
          </span>
          <span className="flex items-center gap-2 font-semibold text-gray-500">
            <MdOutlineContactPage className="text-2xl" /> Page: {totalPages}
          </span>
        </div>
        <span className="divider"></span>
        <div className="flex flex-col lg:flex-row gap-5">
          <button className="btn rounded-full bg-blue-200 text-blue-700">
            Category: {categories}
          </button>
          <button className="btn rounded-full bg-orange-200 text-orange-700">
            Rating: {rating}
          </button>
          <Link
            to={`/books/${bookId - 1}`}
            className="btn rounded-full bg-green-500 text-white font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

BooksData.propTypes = {
  book: checkPropTypes.object,
};

export default BooksData;
