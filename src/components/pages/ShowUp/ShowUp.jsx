import menWatch from "../../../assets/showUp/menShow.jpg";
const ShowUp = () => {
  return (
    <div className="mt-8">
      <h1 className="text-center font-bold text-2xl mb-8">
        We offer on products. Don't Miss
      </h1>
      <div
        className="hero h-[500px]  bg-fixed "
        style={{ backgroundImage: `url(${menWatch})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-3xl font-bold">
              Clearance Sales Up to 70% Off. <br /> All Sales are Final!
            </h1>
            <p className="mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur asperiores id porro sit, amet, officia doloremque non
              sapiente excepturi dignissimos ipsa maxime dolores neque ducimus,
              iure modi sequi vitae aliquid!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowUp;
