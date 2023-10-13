import AboutUs from "../../AboutUs/AboutUs";
import BestSellers from "../../BestSellers/BestSellers";
import Blog from "../../Blog/Blog";
import CardDetails from "../../CardDetails/CardDetails";
import Conditions from "../../Conditions/Conditions";
import ContactUs from "../../Contact/ContactUs";
import Shop from "../../Shop/Shop";
import ShowUp from "../../ShowUp/ShowUp";
import Testimonials from "../../Testimonials/Testimonials";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardDetails></CardDetails>
      <Shop></Shop>
      <ShowUp></ShowUp>
      <BestSellers></BestSellers>
      <Conditions></Conditions>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <AboutUs></AboutUs>
      <ContactUs></ContactUs>
    </div>
  );
};

export default Home;
