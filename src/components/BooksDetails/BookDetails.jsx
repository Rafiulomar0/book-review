import { useLoaderData, useLocation } from "react-router-dom";
import Tags from "../Tags/Tags";
import {
  getLocalDataReadList,
  getLocalDataWishList,
  setLocalDataReadList,
  setLocalDataWishList,
} from "../../utilities/utilities";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

  const alreadyInReadList = () => toast("Book is already in Read List");
  const alreadyInWishList = () => toast("Book is already in Wish List");

  const alreadyInReadListSuccess = () =>
    toast("Book is Added in ReadList Successfully");
  const alreadyInWishListSuccess = () =>
    toast("Book is Added in WishList Successfully");

  const setReadList = (bookId) => {
    const localReadList = getLocalDataReadList();
    for (const id of localReadList) {
      if (id === parseInt(bookId) + 1) {
        alreadyInReadList();
        return;
      }
    }
    setLocalDataReadList(bookId);
    alreadyInReadListSuccess();
  };

  const setWishList = (bookId) => {
    const localWishList = getLocalDataWishList();
    for (const id of localWishList) {
      if (id === parseInt(bookId) + 1) {
        alreadyInWishList();
        return;
      }
    }
    setLocalDataWishList(bookId);
    alreadyInWishListSuccess();
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className="bg-gray-100 rounded-2xl mx-auto">
          <img src={image} alt={bookName} className="w-96 p-8" />
        </div>
        <div className="col-span-2 p-1">
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
            <div className="text-md font-bold">
              <p className="text-md font-medium text-gray-800">
                <span className="text-lg font-bold">Review :</span> {review}
              </p>
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
            <button
              className="btn btn-outline font-bold "
              onClick={() => setReadList(bookId)}
            >
              Read
            </button>
            <button
              className="btn btn-success font-bold text-white"
              onClick={() => setWishList(bookId)}
            >
              Wishlist
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
