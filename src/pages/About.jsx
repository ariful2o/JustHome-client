import BannerImg from "../components/BannerImg";
import GoogleMapReact from 'google-map-react';
import PropTypes from 'prop-types';
import ComminBanner from "../components/ComminBanner";


const AnyReactComponent = ({ text }) => <div>{text}</div>;


export default function About() {

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 14
  };
  return (
    <>
    <ComminBanner location={'About'}></ComminBanner>
    
      <div className="flex flex-col lg:flex-row p-10 mx-auto">
        <div className="max-w-2xl p-20">
          <h1 className="text-5xl font-bold text-[#43CEC6] my-20">SAY HELLO!</h1>
          <h4 className="text-2xl italic font-semibold text-[#162C5A] max-w-md p-9">Make a difference in the life of a child with special needs, create an inclusive community and improve yourself!</h4>
          <small className="text-[#ADA4A1] my-10 block">Types of special needs vary in severity. People with autism, Down syndrome, dyslexia, blindness, ADHD, or cystic fibrosis, for example, may be considered to have special needs. However, special needs can also include cleft lips, or missing limbs.</small>
          <button className="btn bg-[#FFD223] rounded-2xl">More About Us</button>
        </div>
        <div className="">
          <img src='https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/img_hello2.jpg' alt="" />
        </div>
      </div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#43CEC6] my-">ABOUT US</h1>
        <h4 className="text-2xl italic font-semibold text-[#162C5A] max-w-3xl p-9 mx-auto">Our goal is to provide every individual with special needs the
          support, friendship and inclusion that they deserve.</h4>

        <div className="flex flex-col lg:flex-row justify-around">
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-7-740x466.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Our Mission</h2>
              <p className="my-6">Lighthouse founded upon the idea that within each person is a soul; and that soul is equal and worthy of boundless love.</p>
              <div className="card-actions">
                <button className="btn bg-[#FFD223] rounded-3xl px-5">DETAILS</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-6-740x466.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">What We Do</h2>
              <p className="my-6">Lighthouse founded upon the idea that within each person is a soul; and that soul is equal and worthy of boundless love.</p>
              <div className="card-actions">
                <button className="btn bg-[#FFD223] rounded-3xl px-5">DETAILS</button>
              </div>
            </div>
          </div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-8-740x466.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Our Values</h2>
              <p className="my-6">Lighthouse founded upon the idea that within each person is a soul; and that soul is equal and worthy of boundless love.</p>
              <div className="card-actions">
                <button className="btn bg-[#FFD223] rounded-3xl px-5">DETAILS</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BannerImg />
      <div className=" bg-[#43CEC6]">
        <h1 className="text-5xl font-bold text-white py-8 text-center">OUR STAFF</h1>
        <h4 className="text-2xl italic font-semibold text-[#162C5A] max-w-3xl my-8 mx-auto">Meet our the best and executive
          management team</h4>

        <div className="flex justify-evenly p-14">
          <div className="w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team1-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Janet Green</h2>
            <p className="text-white text-sm text-center">EXECUTIVE DIRECTOR</p>
          </div>
          <div className="w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team2-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Michael Jones</h2>
            <p className="text-white text-sm text-center">SUPERVISOR</p>
          </div>
          <div className="w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team3-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Anna Dowson</h2>
            <p className="text-white text-sm text-center">PRESCHOOL TEACHER</p>
          </div>
          <div className="w-44">
            <img className="w-32 mx-auto rounded-full" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/team4-760x760.jpg" />
            <h2 className="text-center text-[#162C5A] my-3 font-bold hover:text-[#FFD223]">Christina Smith</h2>
            <p className="text-white text-sm text-center">MASTER INSTRUCTOR</p>
          </div>
        </div>
      </div>

      <div className=" bg-base-200 p-8">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-10">
          <div className="p-9" style={{ height: '100vh', width: '50%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={59.955413}
                lng={30.337844}
                text="Our School"
              />
            </GoogleMapReact>
          </div>

          <div className="">
            <h1 className="text-5xl font-bold text-[#43CEC6]">CONTACT INFO</h1>
            <p className="py-6 mb-20 text-[#162C5A] text-3xl font-semibold">We are a non-profit organization.<br />
              Our goal is to provide help</p>

            <label htmlFor="address">ADDRESS</label>
            <p className="text-[#A1A1AA] p-2">8500, Lorem Street, Chicago, IL, 55030</p>
            <div className="my-4">
              <label htmlFor="address">Phone</label>
              <p className="text-[#A1A1AA] p-2">(123) 456-78-90 <br />(123) 456-78-90</p>
            </div>
            <label htmlFor="address">EMAIL</label>
            <p className="text-[#A1A1AA] p-2">info@example.com</p>
          </div>
        </div>
      </div>
    </>
  )
}

AnyReactComponent.propTypes = {
  text: PropTypes.string.isRequired,
};