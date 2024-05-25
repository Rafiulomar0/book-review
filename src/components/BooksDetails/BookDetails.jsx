import { useLoaderData } from "react-router-dom";

const BookDetails = () => {
  const books = useLoaderData();
  console.log(books);
  return (
    <div>
      <h3>Book Details</h3>
    </div>
  );
};

export default BookDetails;
