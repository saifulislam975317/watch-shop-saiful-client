import { FaShippingFast } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { BiHelpCircle } from "react-icons/bi";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
const Conditions = () => {
  return (
    <div className="mt-8">
      <SectionTitle
        heading={"Products conditions"}
        subHeading={"Products Shipping & Return Criteria"}
      ></SectionTitle>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2 justify-center items-center">
        <div className="card w-96  border-4">
          <div className="card-body items-center text-center">
            <FaShippingFast className="text-7xl"></FaShippingFast>
            <h1 className="text-xl font-bold">Free Shipping</h1>
            <p>Free world wide shipping on all area order above $100</p>
          </div>
        </div>

        <div className="card w-96  border-4">
          <div className="card-body items-center text-center">
            <GiReturnArrow className="text-7xl"></GiReturnArrow>
            <h1 className="text-xl font-bold">7 Days Easy Return</h1>
            <p>Product any fault within 7 days for an immediately exchange</p>
          </div>
        </div>
        <div className="card w-96  border-4">
          <div className="card-body items-center text-center">
            <BiHelpCircle className="text-7xl"></BiHelpCircle>
            <h1 className="text-xl font-bold">24/7 Friendly Support</h1>
            <p>Our support Team always ready for you to 7 days a week</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conditions;
