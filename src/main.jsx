import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./Error/Error";
import PageToRead from "./components/PageToRead/PageToRead";
import Home from "./components/Home/Home";
import BookDetails from "./components/BooksDetails/BookDetails";
import ListedBooks from "./components/ListedBooks/ListedBooks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error />,
    children: [
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
      },
      {
        path: "/books/:bookId",
        loader: () => fetch("../booksData.json"),
        element: <BookDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
