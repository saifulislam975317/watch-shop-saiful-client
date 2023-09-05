import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import blog1 from "../../../assets/blog/blog1.jpg";
import blog2 from "../../../assets/blog/blog2.jpg";
import blog3 from "../../../assets/blog/blog3.jpg";
import blog4 from "../../../assets/blog/blog4.jpg";
const Blog = () => {
  return (
    <div className="text-center mt-5">
      <h1 className="text-3xl font-bold text-green-500 uppercase">
        Our Latest Blog
      </h1>
      <h2 className="text-lg mt-2 mb-5">Over 868000 watches and Accessories</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>
            <img src={blog1} alt="" />
            <div className="mb-10">
              <h1>We are certified web agency</h1>
              <p>September-6,2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog2} alt="" />
            <div className="mb-10">
              <h1>We are certified web agency</h1>
              <p>September-6,2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog3} alt="" />
            <div className="mb-10">
              <h1>We are certified web agency</h1>
              <p>September-6,2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog4} alt="" />
            <div className="mb-10">
              <h1>We are certified web agency</h1>
              <p>September-6,2023</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog1} alt="" />
            <h1>We are certified web agency</h1>
            <p>September-6,2023</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog2} alt="" />
            <h1>We are certified web agency</h1>
            <p>September-6,2023</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog3} alt="" />
            <h1>We are certified web agency</h1>
            <p>September-6,2023</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={blog4} alt="" />
            <h1>We are certified web agency</h1>
            <p>September-6,2023</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Blog;
