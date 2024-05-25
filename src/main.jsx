import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Error from "./routes/Error";
import BookDetails from "./components/BooksDetails/BookDetails";
import PageToRead from "./components/PageToRead/PageToRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/books/:bookId",
        loader: () => fetch("../public/booksData.json"),
        element: <BookDetails />,
      },
      {
        path: "/pageToRead",
        element: <PageToRead></PageToRead>,
      },
      {
        path: "/listedBooks",
        element: <h1>Listed Books</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
