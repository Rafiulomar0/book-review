import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import Books from "../Books/Books";
import Hero from "../Hero/Hero";

const Home = () => {
  const location = useLocation();
  return (
    <>
      <Header></Header>
      {location.pathname === "/" && (
        <>
          <Hero></Hero>
          <Books></Books>
        </>
      )}
      <Outlet></Outlet>
    </>
  );
};

export default Home;
