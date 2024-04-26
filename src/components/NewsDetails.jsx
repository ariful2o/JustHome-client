import {  useLoaderData, useParams } from 'react-router-dom'

export default function NewsDetails() {
    const news = useLoaderData()
    let { id } = useParams()

    const detailsNews = news.find((item) => item.id == id)
    const { image, price, priceDetails, propertyDetails, details, title } = detailsNews;
    return (
        <div className='mx-auto w-8/12'>
            <div className=''>
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
        </div>
    )
}
