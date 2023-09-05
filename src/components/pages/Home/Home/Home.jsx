import AboutUs from "../../AboutUs/AboutUs";
import Blog from "../../Blog/Blog";
import CardDetails from "../../CardDetails/CardDetails";
import Conditions from "../../Conditions/Conditions";
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
      <Conditions></Conditions>
      <Testimonials></Testimonials>
      <Blog></Blog>
      <AboutUs></AboutUs>
    </div>
  );
};

export default Home;
