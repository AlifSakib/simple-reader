import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import BookDetails from "./components/BookDetails";
import Books from "./components/Books";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Root from "./components/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "books",
        loader: () => fetch("https://api.itbook.store/1.0/search/mongodb"),
        element: <Books></Books>,
      },
      {
        path: "/book/:id",
        loader: async ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.id}`),
        element: <BookDetails></BookDetails>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
    ],
  },
]);

export default router;
