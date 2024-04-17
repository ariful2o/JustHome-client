import { Helmet } from "react-helmet-async";
import ComminBanner from "../components/ComminBanner";


export default function Features() {
  return (
    <div>
      <ComminBanner location={'Features'}></ComminBanner>
      <Helmet>
        <title>Light School House | Features</title>
      </Helmet>
    </div>
  )
}
