import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";

const root = () => {
  return (
    <>
      <Navbar></Navbar>
      <Home></Home>
      <Outlet></Outlet>
    </>
  );
};

export default root;
