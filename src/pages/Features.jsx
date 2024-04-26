import { Helmet } from "react-helmet-async";
import ComminBanner from "../components/ComminBanner";


export default function Features() {
 
  return (
    <div>
      <ComminBanner location={'Booking'}></ComminBanner>
      <Helmet>
        <title>House Rent| Booking</title>
      </Helmet>

    </div>
  )
}
