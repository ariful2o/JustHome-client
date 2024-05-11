import { useState } from "react"
// import { Fade } from "react-awesome-reveal"
import { FaBath, FaBed } from "react-icons/fa6"
import { IoLocationOutline } from "react-icons/io5"
import { useLoaderData, useParams } from "react-router-dom"
import ComminBanner from "../../components/ComminBanner"

export default function ResidentialDetails() {
  const [count, setCount] = useState(1)
  const { id } = useParams()
  const booking = useLoaderData()
  if (!Array.isArray(booking)) {
    return <div className="w-full flex justify-center"><span className="loading loading-spinner min-h-svh text-error mx-auto"></span></div>
  }
  const detail = booking.find(item => item.id === parseInt(id))
  const { priceDetails, image, title, status, location, details, price, bedrooms, bathrooms, propertyDetails } = detail
  return (
    <>
      <ComminBanner location={'Details'}></ComminBanner>
      <div className="card grid grid-cols-2 gap-4">
        {/* <Fade delay={200} direction="left"> */}
        <figure className="w-full"><img className="max-h-full py-10 p-4 w-full" src={image} alt={title} /></figure>
        {/* </Fade> */}
        <div className="card-body">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              {/* <Fade delay={200} direction="right"> */}
              <IoLocationOutline className="text-xl" />
              <p className=" font-semibold text-gray-700 dark:text-gray-400">{location}</p>
              {/* </Fade> */}
            </div>
            {/* <Fade delay={200} direction="left"> */}
            <div className="">
              <p className="font-black">Price : ${price} USD</p>
            </div>
            {/* </Fade> */}
          </div>
          <div className="divider"></div>
          {/* <Fade delay={250} direction="right"> */}
          <h2 className="card-title text-3xl font-sotify">{title}</h2>
          {/* </Fade> */}
          {/* <Fade delay={300} direction="right"> */}
          {/* <p className="p-8 max-h-40">{description.slice(0, 95)} ...</p> */}
          {/* </Fade> */}
          <div className="">
            {/* <Fade delay={350} direction="right"> */}
            <p className="font-light text-[#1f5f45] my-5"><span className="font-bold">Stock : </span>{status}</p>
            {/* </Fade> */}

            <div className="flex gap-4">
              {/* group button  */}
              <div className="flex">
                {/* <Fade delay={350} direction="right"> */}
                <button onClick={() => setCount(count - 1)} className="text-4xl border border-gray-400 px-6">-</button>
                {/* </Fade> */}
                <button className="text-4xl border border-gray-400 px-6">{count}</button>
                <button onClick={() => setCount(count + 1)} className="text-4xl border border-gray-400 px-6">+</button>
              </div>
              {/* <Fade delay={450} direction="right"> */}
              <button className="text-white bg-red-500 px-4 py-2 rounded-lg">Add to Cart</button>
              <button className="btn btn-accent">Booking Now</button>
              {/* </Fade> */}
            </div>

          </div>
          <div className="divider"></div>
          <div className="flex justify-around items-center">
            {/* <Fade delay={350} direction="right"> */}
            <div className="flex items-center gap-2">
              <FaBath />
              <p>{bathrooms} Bath Rooms</p>
            </div>
            {/* </Fade> */}
            {/* <Fade delay={400} direction="right"> */}
            <div className="flex items-center gap-2">
              <FaBed />
              <p>{bedrooms} Bed Rooms</p>
            </div>
            {/* </Fade> */}

          </div>
          <div className="divider"></div>
          <div className="space-y-4">

            <p className="font-bold ">Flat Size : <span className="font-light ">{propertyDetails.flatSize}</span></p>
            <p className="font-bold ">Floor : <span className="font-light ">{propertyDetails.Floor}</span></p>
            <p className="font-bold ">Facilities : <span className="font-light ">{propertyDetails.Facilities}</span></p>
            <p className="font-bold ">Additional Facilities : <span className="font-light ">{propertyDetails.additionalFacilities}</span></p>
            <p className="font-bold ">Address Area : <span className="font-light ">{propertyDetails.addressArea}</span></p>

          </div>
        </div>
        <div className="col-span-2 flex gap-8 my-10 pl-8">
          {/* <Fade delay={500} direction="up"> */}
          <div className="w-1/4 space-y-4 min-w-64">
            <h3 className="text-4xl font-bold font-sotify">Priceing</h3>
            <div className="divider"></div>
            <h2 className="font-semibold">Month :<span className="font-light "> ${priceDetails.Month} USD</span></h2>
            <p className="font-semibold ">Service Charge: <span className="font-light ">${priceDetails.serviceCharge} USD</span></p>
            <p className="font-semibold ">Security Deposit: <span className="font-light ">{priceDetails.securityDeposit}</span></p>
            <p className="font-semibold ">Release Policy: <span className="font-light ">{priceDetails.flatReleasePolicy}</span></p>
          </div>
          {/* </Fade> */}
          <div className="divider divider-horizontal"></div>
          <div className="w-3/4">
            {/* <Fade delay={650} direction="right"> */}
            <h4 className="font-sotify text-4xl">Description</h4>
            <p className="text-[#C1C3C2] p-4">{details}</p>
            {/* </Fade> */}
          </div>
        </div>
      </div>
    </>
  )
}
