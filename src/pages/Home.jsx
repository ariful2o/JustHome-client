import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import HelpCard from "../components/HelpCard";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <Banner />
      <HelpCard />
      <BannerImg/>
    </div>
  )
}
