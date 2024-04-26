import { FaHome } from "react-icons/fa"
import { FaBath, FaBed, FaLocationDot, FaShareNodes, FaStar } from "react-icons/fa6"
import PropTypes from 'prop-types';
import { Link } from "react-router-dom"


export default function HelpCard({ booking }) {
    if (!Array.isArray(booking)) {
        return <div className="w-full flex justify-center"><span className="loading loading-spinner text-error mx-auto"></span></div>
      }

    return (
        <div className="bg-[#43CEC9] text-center" >
            <h1 className="text-6xl font-bold text-white pt-32 mb-10 font-vibes animate__backInDown animate__animated">Rooms & Apartments</h1>
            <h4 className="text-4xl text-[#162C5A] font-semibold mb-32 max-w-xl mx-auto font-sotify italic">We work individually with each family to
                understand their specific needs</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-8">
                {
                    booking.map(item => {
                        return (<Link key={item.id} to={`apartments/${item.id}`}>
                            <div  className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                                <figure className="px-10 pt-10">
                                    <img src={item.image} alt="" className="rounded-xl" />
                                </figure>
                                <div className="mx-auto text-[#9D9D9D]">
                                    <h2 className="card-title my-4 text-[#162C5A] font-sotify">{item.title}</h2>
                                    <div className="flex gap-2 items-center mt-2">
                                        <FaLocationDot />
                                        <p className="mr-6">{item.location}</p>
                                        <FaHome />
                                        <p>{item.location}</p>
                                    </div>
                                    <div className="divider"></div>
                                    <div className="flex gap-2 items-center">
                                        <FaBed />
                                        <p className="mr-4">{item.bedrooms} Bedrooms</p>
                                        <FaBath />
                                        <p>{item.bathrooms} Bathrooms</p>
                                    </div>
                                </div>
                                <div className="flex justify-between items-center my-6 px-12">
                                    <p className="text-xl font-black">Price : ${item?.price}</p>
                                    <div className="flex gap-4 text-[#9D9D9D]">
                                        <FaShareNodes />
                                        <FaStar />
                                    </div>
                                </div>
                            </div></Link>

                        )
                    })
                }
            </div>

        </div>
    )
}
HelpCard.propTypes = {
    booking: PropTypes.array.isRequired,
};