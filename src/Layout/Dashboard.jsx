import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillHome,
  AiFillCreditCard,
  AiTwotoneHome,
  AiTwotoneShopping,
  AiFillContacts,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import useCarts from "../hooks/useCarts";
const Dashboard = () => {
  const [carts] = useCarts();
  const isAdmin = true;
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-neutral p-4 drawer-button lg:hidden"
        >
          <FiMenu></FiMenu>
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-teal-700 text-white">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <AiFillHome></AiFillHome>Admin Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addItem">
                  <FaUserPlus></FaUserPlus>Add Mobile
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/manageItems">
                  <AiOutlineMenuFold></AiOutlineMenuFold>Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/userHome">
                  <AiFillHome></AiFillHome>User Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <AiFillCreditCard></AiFillCreditCard>Payment History
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myCart">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{carts.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <AiTwotoneHome></AiTwotoneHome>Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/order">
              <AiTwotoneShopping></AiTwotoneShopping>Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <AiFillContacts></AiFillContacts>Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
