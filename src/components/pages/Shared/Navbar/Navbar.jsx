import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      {user ? (
        <li>
          <NavLink to="/login">Logout</NavLink>
        </li>
      ) : (
        <>
          <li>
            <NavLink to="/signUp">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-black text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100  rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">Watch shop</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navOption}
          <li tabIndex={0}></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
