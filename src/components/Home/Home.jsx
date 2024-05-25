import { Route, Routes } from "react-router-dom";
import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero></Hero>
              <Books></Books>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
};

export default Home;
