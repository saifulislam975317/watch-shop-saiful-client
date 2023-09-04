import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import banner1 from "../../../../assets/banner/banner1.jpg";
import banner2 from "../../../../assets/banner/banner2.jpg";
import banner3 from "../../../../assets/banner/banner3.jpg";
const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <figure>
              <img src={banner1} alt="" />
            </figure>
            <div className=" absolute lg:block hidden md:hidden  ml-[650px] mb-[210px] p-10  bottom-0   text-white">
              <h1 className="text-2xl font-bold">Gorgeous</h1>
              <h3 className="text-xl text-orange-500">
                Exclusive offer 25% off this week
              </h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                Qui illo nesciunt maxime exercitationem <br /> vitae nihil
                repudiandae animi praesentium alias pariatur.
              </p>
              <h4 className="text-2xl font-bold">$350</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
          <div className=" absolute lg:block hidden md:hidden ml-[250px] mb-[210px] p-10  bottom-0   text-white">
            <h1 className="text-2xl font-bold">Rolex</h1>
            <h3 className="text-xl text-orange-500">
              Exclusive offer 25% off this week
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />{" "}
              Qui illo nesciunt maxime exercitationem <br /> vitae nihil
              repudiandae animi praesentium alias pariatur.
            </p>
            <h4 className="text-2xl font-bold">$450</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
          <div className=" absolute lg:block hidden md:hidden  ml-[250px] mb-[210px] p-10  bottom-0   text-white">
            <h1 className="text-2xl font-bold">Luxury</h1>
            <h3 className="text-xl text-orange-500">
              Exclusive offer 25% off this week
            </h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
              Qui illo nesciunt maxime exercitationem <br /> vitae nihil
              repudiandae animi praesentium alias pariatur.
            </p>
            <h4 className="text-2xl font-bold">$250</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
