import { useEffect, useState } from "react";
import ShowReadList from "../ShowReadList/ShowReadList";
import {
  getLocalDataReadList,
  getLocalDataWishList,
} from "../../utilities/utilities";

const ListedBooks = () => {
  const readBooksList = getLocalDataReadList();
  const wishBooksList = getLocalDataWishList();
  const [tab, setTab] = useState("ReadList");
  const [readData, setReadData] = useState([]);
  const [wishData, setWishData] = useState([]);
  const [sortText, setSortText] = useState("None");

  const check = (data) => {
    const readList = [];
    const wishList = [];
    data.forEach((book) => {
      if (readBooksList.includes(book.bookId)) {
        readList.push(book);
      }
      if (wishBooksList.includes(book.bookId)) {
        wishList.push(book);
      }
    });
    setReadData(readList);
    setWishData(wishList);
  };

  useEffect(() => {
    fetch("../../../public/booksData.json")
      .then((response) => response.json())
      .then((data) => check(data));
  }, []);

  const sortData = () => {
    const unsortedReadData = readData;
    const unsortedWishData = wishData;
    if (sortText === "Rating") {
      unsortedReadData.sort((a, b) => b.rating - a.rating);
      unsortedWishData.sort((a, b) => b.rating - a.rating);
      setReadData([...unsortedReadData]);
      setWishData([...unsortedWishData]);
    } else if (sortText === "Number of Pages") {
      unsortedReadData.sort((a, b) => b.totalPages - a.totalPages);
      unsortedWishData.sort((a, b) => b.totalPages - a.totalPages);
      setReadData([...unsortedReadData]);
      setWishData([...unsortedWishData]);
    } else if (sortText === "Publish Year") {
      unsortedReadData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      unsortedWishData.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      setReadData([...unsortedReadData]);
      unsortedWishData([...unsortedWishData]);
    }
  };

  return (
    <div className="container mx-auto font-work-sans">
      <div className="bg-gray-200 h-24 rounded-3xl flex justify-center items-center mt-5">
        <p className="font-bold text-3xl">Books</p>
      </div>
      <div className="flex justify-center mt-12 space-x-2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-success text-lg text-white"
          >
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a
                onClick={() => {
                  setSortText("Rating");
                  sortData();
                }}
              >
                Rating
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSortText("Number of Pages");
                  sortData();
                }}
              >
                Number of Pages
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setSortText("Publish Year");
                  sortData();
                }}
              >
                Publish Year
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center text-xl">Soted by: {sortText}</p>
      <div role="tablist" className="tabs tabs-lifted tabs-lg w-16 mt-12 mb-12">
        <a
          role="tab"
          className={`tab ${tab === "ReadList" ? "tab-active" : ""}`}
          onClick={() => {
            setTab("ReadList");
          }}
        >
          ReadList
        </a>
        <a
          role="tab"
          className={`tab ${tab === "WishList" ? "tab-active" : ""}`}
          onClick={() => {
            setTab("WishList");
          }}
        >
          WishList
        </a>
      </div>
      {tab === "ReadList" ? (
        <ShowReadList
          data={readData}
          setData={setReadData}
          sortText={sortText}
        />
      ) : (
        <ShowReadList
          data={wishData}
          setData={setWishData}
          sortText={sortText}
        />
      )}
    </div>
  );
};

export default ListedBooks;
