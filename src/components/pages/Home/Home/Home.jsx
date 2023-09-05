import CardDetails from "../../CardDetails/CardDetails";
import Shop from "../../Shop/Shop";
import ShowUp from "../../ShowUp/ShowUp";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <CardDetails></CardDetails>
      <Shop></Shop>
      <ShowUp></ShowUp>
    </div>
  );
};

export default Home;
