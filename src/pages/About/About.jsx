import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";
import BannerImg from "../../components/BannerImg";
import ComminBanner from "../../components/ComminBanner";
import Map from "../../components/Map";
import MeetOurTeam from '../Home/shared/MeetOurTeam';
import Success from '../Home/shared/Success';
import DownloadApp from './DownloadApp';


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function About() {


  return (
    <>
      <ComminBanner location={'About'}></ComminBanner>
      <Helmet>
        <title>JustHome| About</title>
      </Helmet>

      <div className="flex flex-col lg:flex-row lg:p-10 mx-auto">
        <div className="max-w-2xl lg:p-20">
          <h1 className="text-5xl font-bold font-sotify text-[#43CEC6] my-6 text-center animate__animated animate__backInDown">Our Photo Galary</h1>
          <h4 className="text-2xl italic font-semibold font-sotify text-[#162C5A] lg:max-w-md p-9 animate__animated animate__backInLeft animate__delay-1s">We offer professional home design services tailored to your needs and preferences. Our expert designers will work with you to create your dream home.</h4>
          <small className="text-[#ADA4A1] my-8 block text-sm animate__animated animate__backInLeft animate__delay-2s">Sed pellentesque pulvinar arcu ac congue. Sed sed est nec justo maximus blandit. Curabitur lacinia, eros sit amet maximus suscipit, magna sapien veneuynatis eros, et gravida urna massa ut lectus. Quisque lacinia laciunia viverra. Nullram nec est et lorem sodales ornare a in sapien. In trtset urna marximus, conse ctetur iligula in, gravida erat. Nullam digniifssrim hendrerit auctor. Sed varius, dolor vitae iaculis condim rtweentum, massa nisl cursus sapien, gravida ultrices nisi dolor non erat.</small>
          <button className="btn bg-[#FFD223] rounded-2xl animate__animated animate__backInLeft animate__delay-2s">More About Us</button>
        </div>
        <div className="animate__fadeInRight animate__animated animate__delay-1s">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-9-150x150.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-10.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-11-150x150.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-8-150x150.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/gallery-7-150x150.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-12-311x232.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-06-311x232.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-05.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-01-360x270.jpg" alt="" />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/about-image-443x334.png" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-36-360x270.jpg" alt="" />
              </div>
              <div>
                <img className="h-full w-full rounded-lg" src="https://demo.softhopper.studio/house-rent/wp-content/uploads/sites/7/2017/04/demo-image-rental-37-360x270.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BannerImg />
      <MeetOurTeam></MeetOurTeam>
      <Success></Success>
      <DownloadApp></DownloadApp>

      <div className=" bg-base-200 p-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 justify-center items-center lg:gap-10">

          <div className="lg:p-9 col-span-3">
            <Map />
          </div>

          <div className="col-span-2 my-8">
            <h1 className="text-3xl lg:text-5xl font-bold text-[#43CEC6] m-4 font-sotify">CONTACT INFO</h1>
            <p className="sm:py-6 mb-20 text-[#162C5A] text-xl lg:text-3xl font-semibold font-sotify">We are a non-profit organization.<br />
              Our goal is to provide help</p>
            <label htmlFor="address">ADDRESS</label>
            <p className="text-[#A1A1AA] p-2">8500, Lorem Street, Chicago, IL, 55030</p>
            <div className="my-4">
              <label htmlFor="address">Phone</label>
              <p className="text-[#A1A1AA] p-2">(+880) 16452-19603 <br />(+880) 456-78-90</p>
            </div>
            <label htmlFor="address">EMAIL</label>
            <p className="text-[#A1A1AA] p-2">arifulz848@gmail.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};