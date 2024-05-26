import { useLoaderData, useLocation } from "react-router-dom";
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
    <div className="container mx-auto grid grid-cols-2">
      <div>
        <img src={image} alt="" />
      </div>
      <div>{bookName}</div>
    </div>
  );
};

export default BookDetails;
