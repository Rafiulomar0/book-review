import { NavLink } from "react-router-dom";

const Header = () => {
  const navLink = (
    <>
      <li className="text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/pageToRead">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start w-full lg:w-auto lg:flex lg:flex-auto">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 space-y-2"
          >
            {navLink}
          </ul>
        </div>
        <a className="text-3xl font-medium">Book Vibe</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-2">{navLink}</ul>
      </div>
      <div className="navbar-end space-x-5 hidden md:flex">
        <a className="btn bg-lime-500 font-bold text-white">Sign In</a>
        <a className="btn bg-blue-400 font-bold text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Header;
