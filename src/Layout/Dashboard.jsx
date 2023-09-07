import { NavLink, Outlet } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiFillCreditCard,
  AiTwotoneHome,
  AiTwotoneShopping,
  AiFillContacts,
  AiOutlineMenuFold,
} from "react-icons/ai";
import { FaUsers, FaUserPlus } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import useCarts from "../hooks/useCarts";
import useAdmin from "../hooks/useAdmin";
const Dashboard = () => {
  const [carts] = useCarts();
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content mt-4">
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
                <NavLink to="/dashboard/manageItems">
                  <AiOutlineMenuFold></AiOutlineMenuFold>Manage Items
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/addWatch">
                  <FaUserPlus></FaUserPlus>Add Watch
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
                <NavLink to="/dashboard/myCart">
                  <AiOutlineShoppingCart></AiOutlineShoppingCart>My Cart
                  <span className="badge badge-secondary">
                    +{carts.length || 0}
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <AiFillCreditCard></AiFillCreditCard>Payment History
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
            <NavLink to="/shop">
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
