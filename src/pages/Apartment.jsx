import { Helmet } from "react-helmet-async";
import { useLoaderData, useParams } from "react-router-dom";
import ComminBanner from "../components/ComminBanner";


export default function Apartment() {
  const allApartments = useLoaderData()
    let { id } = useParams()

    const Apartment = allApartments.find((item) => item.id == id)
  const { image,  price, priceDetails, propertyDetails, details, title } = Apartment;

  const handleBooking = (e) => {
    e.preventDefault()
    // const form=e.target;
    // const name=form.name.value
    // const phone=form.phone.value;
    // const email=form.email.value;
    // const checkin=form.checkin.value;
    //  const checkout=form.checkout.value;
    //  const familyNumber=form.familyNumber.value;
    //  const children=form.children.value;
    //  const message=form.message.value;
    


  }
  return (
    <div>
      <ComminBanner location={'Apartment'}></ComminBanner>
      <Helmet>
        <title>House Rent| Apartment</title>
      </Helmet>
      <div className="grid grid-cols-4">
        <div className='mx-auto col-span-3 p-4'>
          <img className='w-full animate__animated animate__zoomIn' src={image} alt="" />
          <h1 className="text-[#353372] text-3xl font-bold font-serif my-5">{title}</h1>
          <p className='my-5 text-[#959595] text-lg'>{details}</p>
          <h1 className="text-[#353372] text-3xl font-bold font-serif my-5">Price Details-</h1>
          <p className='my-3 font-bold'>Rent/Month: <span className="text-[#959595]">${price} (negotiable)</span></p>
          <p className='my-3 font-bold'>Service Charge : <span className="text-[#959595]">{priceDetails.serviceCharge}/= Tk per month, subject to change</span></p>
          <p className='my-3 font-bold'>Security Deposit : <span className="text-[#959595]">{priceDetails.securityDeposit}</span></p>
          <p className='my-3 font-bold'>Flat Release Policy :<span className="text-[#959595]">{priceDetails.flatReleasePolicy}</span></p>
          <h1 className="text-[#353372] text-3xl font-bold font-serif my-5">Property Details-</h1>
          <p className='my-3 font-bold'>Address & Area :<span className="text-[#959595]">{propertyDetails.addressArea}</span></p>
          <p className='my-3 font-bold'>Flat Size :<span className="text-[#959595]">{propertyDetails.flatSize}</span></p>
          <p className='my-3 font-bold'>Floor :<span className="text-[#959595]">{propertyDetails.Floor}</span></p>
          <p className='my-3 font-bold'>Room Category :<span className="text-[#959595]">{propertyDetails.roomCategory}</span></p>
          <p className='my-3 font-bold'>Facilities :<span className="text-[#959595]">{propertyDetails.Facilities}</span></p>
          <p className='my-3 font-bold'>Additional Facilities :<span className="text-[#959595]">{propertyDetails.additionalFacilities}</span></p>
          <h1 className="text-[#353372] text-3xl font-bold font-serif my-5">Rental Overview</h1>
          <div className="overflow-x-auto">
          </div>


        </div>
        <div className="col-span-1">
          <h1 className="text-[#353372] text-2xl font-bold font-sotify text-center my-5">BOOK THIS APARTMENT</h1>
          <form className="card-body" onSubmit={handleBooking}>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-[#FCA22A]">FULL NAME</span>
              </label>
              <input name="name" type="text" placeholder="Full Name" className="input input-bordered" required />
              <label className="label">
                <span className="label-text text-[#FCA22A]">PHONE NUMBER</span>
              </label>
              <input name="phone" type="text" placeholder="+880123456789" className="input input-bordered" required />

              <label className="label">
                <span className="label-text text-[#FCA22A]">Email</span>
              </label>
              <input name="email" type="email" placeholder="example@gmail.com" className="input input-bordered" required />
              <label className="label">
                <span className="label-text text-[#FCA22A]">CHECK IN</span>
              </label>
              <input name="checkin" type="text" placeholder="Check In" className="input input-bordered" required />
              <label className="label">
                <span className="label-text text-[#FCA22A]">CHECK OUT</span>
              </label>
              <input name="checkout" type="text" placeholder="Check Out" className="input input-bordered" required />
              <label className="label">
                <span className="label-text text-[#FCA22A]">FAMILY MEMBER</span>
              </label>
              <input name="familyNumber" type="number" placeholder="1" className="input input-bordered" required />
              <label className="label">
                <span className="label-text text-[#FCA22A]">CHILDREN</span>
              </label>
              <input name="children" type="number" placeholder="0" className="input input-bordered" required />
              <label className="label">
                <span className="label-text text-[#FCA22A]">YOUR MESSAGE</span>
              </label>
              <textarea name="message" className="textarea textarea-warning" placeholder="Message"></textarea>
            </div>

            <div className="form-control mt-6">
              
              <input type="submit" value="Request Booking" className="hover:text-gray-900 bg-gradient-to-r from-[#22AF60] to-[#2F486C] hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 text-white" />
            </div>
          </form>
        </div>

      </div>
    </div>
  )
}
