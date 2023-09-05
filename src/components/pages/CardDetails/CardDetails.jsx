import menW from "../../../assets/mwc watches/men watch.jpg";
import womenW from "../../../assets/mwc watches/women watch.jpg";
import coupleW from "../../../assets/mwc watches/couple watch.jpg";

const CardDetails = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-between my-4 gap-2 ">
      <div className="card  shadow-xl  image-full">
        <figure>
          <img src={menW} alt="watch" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center mt-24">
          <h4 className="text-orange-400">Flash Sale</h4>
          <h2 className="text-3xl font-bold">Men's Watch</h2>
          <p>20% Discount</p>
        </div>
      </div>
      <div className="card   image-full">
        <figure>
          <img src={womenW} alt="watch" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center mt-24">
          <h4 className="text-orange-400">Flash Sale</h4>
          <h2 className="text-3xl font-bold">Women's Watch</h2>
          <p>25% Discount</p>
        </div>
      </div>
      <div className="card image-full">
        <figure>
          <img src={coupleW} alt="watch" />
        </figure>
        <div className="card-body flex flex-col justify-center items-center mt-24">
          <h4 className="text-orange-400">Flash Sale</h4>
          <h2 className="text-3xl font-bold">Couple's Watch</h2>
          <p>30% Discount</p>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
