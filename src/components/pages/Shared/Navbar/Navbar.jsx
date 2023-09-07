import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../../ContextProvider/AuthProvider";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCarts from "../../../../hooks/useCarts";
import useAdmin from "../../../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [carts] = useCarts();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut().then(() => {});
  };
  const navOption = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
      <li>
        <NavLink to="/about">About us</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/dashboard/myCart">
              <AiOutlineShoppingCart className="text-xl"></AiOutlineShoppingCart>
              <span className="badge badge-secondary">
                +{carts?.length || 0}
              </span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to={isAdmin ? "/dashboard/manageItems" : "/dashboard/MyCart"}
            >
              Dashboard
            </NavLink>
          </li>

          <li onClick={handleLogout}>
            <NavLink to="/login">Logout</NavLink>
          </li>
          <li>
            <a href="">{user?.displayName}</a>
          </li>
        </>
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
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow  rounded-box w-52"
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
