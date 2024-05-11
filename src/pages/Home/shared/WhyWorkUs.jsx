import { IoMdArrowForward } from 'react-icons/io'
import img1 from '../../../assets/workUs/h21.jpg.png'

export default function WhyWorkUs() {
  return (
    <div className="hero min-h-screen bg-base-100">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={img1} className="w-full md:max-w-lg rounded-lg shadow-2xl" />
    <div className='bg-[#FFF8F6]'>
      <h1 className="text-3xl lg:text-5xl font-bold font-sotify">Why You Should Work With Us</h1>
      <p className="py-6">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris
nulla ac dictum ut mauris non.</p>
    <div className="flex gap-8">
        <div className="">
            <h4 className="text-xl font-medium mb-4">Buy or Rent Homes</h4>
            <p>We sell your home at the best market price and very quickly as well.</p>
        </div>
        <div className="">
            <h4 className="text-xl font-medium mb-4">Trusted by Thousands</h4>
            <p>We offer you free consultancy to get a loan for your new home.</p>
        </div>
    </div>
      <button className="btn bg-[#E7C873] mt-10">Learn More <IoMdArrowForward /></button>
    </div>
  </div>
</div>
  )
}
