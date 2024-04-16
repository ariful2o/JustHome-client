import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import HelpCard from "../components/HelpCard";
import SwiperSlider from "../components/SwiperSlider";

export default function Home() {
  return (
    <div>
      <SwiperSlider/>
      <Banner />
      <HelpCard />
      <BannerImg/>
    </div>
  )
}
