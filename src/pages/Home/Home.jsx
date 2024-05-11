import { Helmet } from "react-helmet-async";
import DiscoverDeals from "./DiscoverDeals";
import DiscroverDealsAll from "./DiscroverDealsAll";
import FeaturedCategories from "./FeaturedCategories";
import FindProperties from "./FindProperties";
import Slider from "./Slider";
import FAQ from "./shared/FAQ";
import MeetOurTeam from "./shared/MeetOurTeam";
import Reviews from "./shared/Reviews";
import Success from "./shared/Success";
import WhyWorkUs from "./shared/WhyWorkUs";

export default function Home() {
 

  return (
    <div>
      <Helmet>
        <title>JustHome| Home</title>
      </Helmet>
      <Slider></Slider>
      <FeaturedCategories></FeaturedCategories>
      <DiscoverDeals></DiscoverDeals>
      <Success></Success>
      <FindProperties></FindProperties>
      <DiscroverDealsAll></DiscroverDealsAll>
      <MeetOurTeam></MeetOurTeam>
      <WhyWorkUs></WhyWorkUs>
      <Reviews></Reviews>
      <FAQ></FAQ>
    </div>
  )
}
