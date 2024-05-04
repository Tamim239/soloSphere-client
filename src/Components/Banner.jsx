import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Slider } from "./Slider";

import img1 from "../assets/images/carousel1.jpg";
import img2 from "../assets/images/carousel2.jpg";
import img3 from "../assets/images/carousel3.jpg";

export const Banner = () => {
  return (
    <div className="container px-6 py-5 mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
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
            <Slider
              image={img1}
              text="Proactively target best-of-breed interfaces without."
            ></Slider>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slider
              image={img2}
              text="Synergistically transition enabled ideas rather."
            ></Slider>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <Slider
              image={img3}
              text="Conveniently extend vertical core competencies."
            ></Slider>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
