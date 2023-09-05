import aboutImg from "../../../assets/about/about.jpg";
const AboutUs = () => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-orange-500">
        Know About us
      </h1>
      <div className="hero  ">
        <div className="hero-content flex-col lg:flex-row">
          <img src={aboutImg} className=" rounded-lg shadow-2xl" />
          <div className="ml-4">
            <h1 className="text-5xl font-bold">Online Watch Shop</h1>
            <p className="py-6 content-center">
              Welcome to YourWatch Haven, your premier destination for exquisite
              timepieces. As avid watch enthusiasts, we've curated a collection
              that blends craftsmanship, style, and affordability. Our
              commitment to authenticity means you can shop with confidence,
              knowing you're investing in genuine quality. From classic designs
              to modern innovations, our diverse selection caters to every taste
              and occasion. At YourWatch Haven, we're not just selling watches;
              we're sharing our passion for horology. Our goal is to make the
              art of telling time an art of expressing your unique style. Join
              us on this journey and discover the perfect watch to complement
              your lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
