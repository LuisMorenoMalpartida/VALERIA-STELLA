import { Swiper, SwiperSlide } from "swiper/react";
// import img4 from "./img/paisaje.jpg";
// import img5 from './img/paisaje2.jpg'
// import img6 from './img/paisaje3.jpg'
import ropa1 from "./img/ropa 1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "./SectionSwiper.css";
import { Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

export const SectionSwiper = () => {
  const navigate = useNavigate();

  return (
    <div className="sw-container">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="slide-content">
            <img
              src={ropa1}
              alt="Slide 1"
              className="slide-image"
            />
            <div className="slide-text">
              <h2>COMPRA TUS PRENDAS FAVORITAS</h2>
              <div className="button-group">
  <button className="custom-button" onClick={() => navigate("/mujer")}>VER MUJER</button>
  <button className="custom-button" onClick={() => navigate("/outlet")}>VER OUTLET</button>
  <button className="custom-button" onClick={() => navigate("/hombre")}>VER HOMBRE</button>
</div>

            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
