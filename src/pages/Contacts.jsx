import { Helmet } from "react-helmet-async";
import ComminBanner from "../components/ComminBanner";


export default function Contacts() {
  return (
    <div>
      <ComminBanner location={'Contacts'}></ComminBanner>
      <Helmet>
        <title>Light School House | Contacts</title>
      </Helmet>
    </div>
  )
}
