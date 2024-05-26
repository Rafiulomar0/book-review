import { BarChart } from "@mui/x-charts";
import { getLocalDataReadList } from "../../utilities/utilities";
import { useLoaderData } from "react-router-dom";

const PageToRead = () => {
  const booksData = useLoaderData();
  const dataReadList = getLocalDataReadList();
  const readList = booksData.filter((book) =>
    dataReadList.includes(book.bookId)
  );

  const bookNames = readList.map((book) => book.bookName);
  const totalPages = readList.map((book) => book.totalPages);

  return (
    <div className="container mx-auto flex justify-center mt-24 p-2 bg-gray-100 rounded-lg">
      <BarChart
        xAxis={[
          {
            id: "barCategories",
            data: bookNames,
            scaleType: "band",
          },
        ]}
        series={[
          {
            data: totalPages,
          },
        ]}
        width={900}
        height={300}
      />
    </div>
  );
};

export default PageToRead;
