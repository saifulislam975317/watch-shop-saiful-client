import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/pages/Home/Home/Home";
import SignUp from "../components/pages/SignUp/SignUp";
import Login from "../components/pages/Login/Login";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../components/pages/Dashboard/MyCart/MyCart";
import AllUsers from "../components/pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../components/pages/Dashboard/ManageItems/ManageItems";
import AddWatch from "../components/pages/Dashboard/AddWatch/AddWatch";
import UpdateWatch from "../components/pages/Dashboard/UpdateWatch/UpdateWatch";
import Shop from "../components/pages/Shop/Shop";
import PageNotFound from "../PageNotFound/PageNotFound";
import Payment from "../components/pages/Dashboard/Payment/Payment";
import PaymentHistory from "../components/pages/Dashboard/PaymentHistory/PaymentHistory";
import ContactUs from "../components/pages/Contact/ContactUs";
import PrivateRoute from "./PrivateRoute";
import ProductDetails from "../components/pages/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/shop",
        element: <Shop></Shop>,
      },
      {
        path: "/contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/details/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ({ params }) =>
          fetch(
            `https://watch-shop-saiful-server.vercel.app/watchData/${params.id}`
          ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allUsers",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "manageItems",
        element: <ManageItems></ManageItems>,
      },
      {
        path: "addWatch",
        element: <AddWatch></AddWatch>,
      },
      {
        path: "manageItems/:id",
        element: <UpdateWatch></UpdateWatch>,
        loader: ({ params }) =>
          fetch(
            `https://watch-shop-saiful-server.vercel.app/watchData/${params.id}`
          ),
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound></PageNotFound>,
  },
]);

export default router;
