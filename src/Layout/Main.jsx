import { Outlet } from "react-router-dom";
import Footer from "../components/pages/Shared/Footer/Footer";
import Navbar from "../components/pages/Shared/Navbar/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
