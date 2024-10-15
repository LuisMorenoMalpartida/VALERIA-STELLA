import { Swiper, SwiperSlide } from "swiper/react";
// import img4 from "./img/paisaje.jpg";
// import img5 from './img/paisaje2.jpg'
// import img6 from './img/paisaje3.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/virtual";
import "./SectionSwiper.css";
import { Autoplay } from "swiper/modules";
import { Button } from "@nextui-org/react";
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
              src="https://cc-prod.scene7.com/is/image/CCProdAuthor/Fashion-photography_P1_900x420?$pjpeg$&jpegSize=200&wid=900"
              alt="Slide 1"
              className="slide-image"
            />
            <div className="slide-text">
              <h2>COMPRA TUS PRENDAS FAVORITAS</h2>
              <div className="button-group">
                <Button onClick={() => navigate("/mujer")}>VER MUJER</Button>
                <Button>VER OUTLET</Button>
                <Button>VER HOMBRE</Button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>
          <div className="slide-content">
          <img src="https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.4,gy-0.5,q-75,rh-3264,rw-5824,th-1080,tw-1920/1240245968633466910.jpeg" 
           alt="Slide 1" className="slide-image" />

            <div className="slide-text">
            <h2>COMPRA TUS PRENDAS FAVORITAS</h2>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slide-content">
          <img src="https://www.ultraimagehub.com/wallpapers/tr:flp-false,gx-0.4,gy-0.5,q-75,rh-3264,rw-5824,th-1080,tw-1920/1240245968633466910.jpeg" 

          alt="Slide 1" className="slide-image" />

            <div className="slide-text">
            <h2>COMPRA TUS PRENDAS FAVORITAS</h2>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};
