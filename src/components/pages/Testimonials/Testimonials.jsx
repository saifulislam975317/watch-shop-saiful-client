import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="text-center mt-8">
      <h1 className="text-3xl font-bold text-slate-500">Testimonials</h1>
      <h2 className="text-2xl font-bold text-orange-400 ">
        see what our clients feedback about our products
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex flex-col items-center justify-center my-12 mx-24 px-12 py-8">
              <h1>{review.name}</h1>
              <p>{review.review}</p>
              <Rating
                style={{ maxWidth: 180 }}
                value={review.ratings}
                readOnly
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
