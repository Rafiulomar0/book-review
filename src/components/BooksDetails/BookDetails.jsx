import { useLoaderData, useLocation } from "react-router-dom";
import Tags from "../Tags/Tags";
const BookDetails = () => {
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const books = useLoaderData();

  const {
    image,
    bookName,
    author,
    categories,
    review,
    tags,
    totalPages,
    publisher,
    yearOfPublishing,
    rating,
  } = books[bookId];

  return (
    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-gray-100 rounded-2xl mx-auto">
          <img src={image} alt={bookName} className="w-96 p-8" />
        </div>
        <div className="col-span-2">
          <div className="space-y-4">
            <h2 className="text-4xl font-semibold">{bookName}</h2>
            <h3 className="text-xl text-gray-500 font-semibold">
              By: {author}
            </h3>
            <span className="divider"></span>
            <h3 className="text-xl text-gray-500 font-semibold">
              {categories}
            </h3>
            <span className="divider"></span>
            <div className="text-lg font-bold flex items-center">
              Review :
              <p className="text-md font-medium text-gray-800">{review}</p>
            </div>
            <h2 className="text-md flex space-x-2 items-center">
              <span className="text-lg font-bold flex items-center">Tags:</span>
              {tags.map((item, index) => (
                <Tags key={index} text={"#" + item}></Tags>
              ))}
            </h2>
          </div>
          <span className="divider"></span>
          <div className="grid grid-cols-2 gap-5">
            <span className="text-gray-600 text-md font-semibold">
              Number of Pages:
            </span>
            <span className="font-bold"> {totalPages}</span>
            <span className="text-gray-600 text-md font-semibold">
              Publisher:
            </span>
            <span className="font-bold">{publisher}</span>
            <span className="text-gray-600 text-md font-semibold">
              Year of Publishing:
            </span>
            <span className="font-bold"> {yearOfPublishing}</span>
            <span className="text-gray-600 text-md font-semibold">Rating:</span>
            <span className="font-bold"> {rating}</span>
          </div>
          <div className="mt-5 flex gap-4 items-center">
            <button className="btn btn-outline font-bold ">Read</button>
            <button className="btn btn-success font-bold text-white">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
