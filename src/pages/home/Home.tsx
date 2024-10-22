import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { SectionSwiper } from "../../features/Home/SectionSwiper/SectionSwiper";
import "./Home.css";
import { SectionOps } from "../../features/Home/SectionOps/SectionOps";
import { SectionModa } from "../../features/Home/SectionModa/SectionModa";
import {
  SectionAd1,
  SectionAd3,
} from "../../features/Home/SectionAd/SectionAd";

export const Home = () => {
  return (
    <>
      <NavBar />
      <SectionSwiper />
      {/* <SectionAd />
      <SectionAd2/> */}
      <SectionAd1 />
      <SectionAd3 />
      <SectionOps />
      <SectionModa />
      <Footer />
    </>
  );
};
