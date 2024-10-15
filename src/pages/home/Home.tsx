import { NavBar } from "../../components/NavBar/NavBar";
import { Footer } from "../../components/Footer/Footer";
import { SectionSwiper } from "../../features/Home/SectionSwiper/SectionSwiper";
import "./Home.css";
import { SectionOps } from "../../features/Home/SectionOps/SectionOps";
import { SectionModa } from "../../features/Home/SectionModa/SectionModa";

export const Home = () => {
  return (
    <>
      <NavBar />
      <SectionSwiper />
      <SectionOps />
      <SectionModa />
      <Footer />
    </>
  );
};
