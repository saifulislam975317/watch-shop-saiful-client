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
          // delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <figure>
              <img src={banner1} alt="" />
            </figure>
            <div className="bg-slate-700 absolute   mr-4 top-0 mt-4 px-4 text-white">
              <h1>Gorgeous</h1>
              <h3>Exclusive offer 25% off this week</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                Qui illo nesciunt maxime exercitationem <br /> vitae nihil
                repudiandae animi praesentium alias pariatur.
              </p>
              <h4>$350</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner2} alt="" />
          <div className="">
            <h1>Gorgeous</h1>
            <h3>Exclusive offer 25% off this week</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illo
              nesciunt maxime exercitationem vitae nihil repudiandae animi
              praesentium alias pariatur.
            </p>
            <h4>$350</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={banner3} alt="" />
          <div className="">
            <h1>Gorgeous</h1>
            <h3>Exclusive offer 25% off this week</h3>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui illo
              nesciunt maxime exercitationem vitae nihil repudiandae animi
              praesentium alias pariatur.
            </p>
            <h4>$350</h4>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
