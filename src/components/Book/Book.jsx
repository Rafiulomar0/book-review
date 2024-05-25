import Tags from "../Tags/Tags";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    categories,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  return (
    <div className="card w-[300px] lg:w-96 bg-base-100 shadow-xl mx-auto cursor-pointer hover:bg-base-200">
      <figure className="px-10 pt-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body">
        <h2 className=" text-md flex space-x-2 items-center">
          {tags.map((item, index) => (
            <Tags key={index} text={item}></Tags>
          ))}
        </h2>
        <h2 className="text-2xl font-bold">{bookName}</h2>
        <span className="text-lg font-medium text-gray-600">By: {author}</span>
        <div className="divider"></div>
        <div className="card-actions flex justify-between w-42">
          <span className="font-semibold">{categories}</span>
          <span className="flex gap-2 items-center font-bold">
            {rating} <FaRegStar />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Book;
