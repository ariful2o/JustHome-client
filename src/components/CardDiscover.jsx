import { PropTypes } from "prop-types";
import { FaBath, FaBed } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { TbResize } from "react-icons/tb";
import { Link } from "react-router-dom";

export default function CardDiscover({ item }) {
    const { image, title, location, bathrooms, bedrooms, price, propertyDetails, status, id } = item
    return (
        <Link to={`/residential/${id}`}>
            <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-xl">
                <a href="" className="relative">
                    <img className="rounded-t-lg w-full min-w-72 h-72" src={image} alt="" />
                    <button className="absolute top-4 left-4 backdrop-blur-xl font-medium px-4 py-2 rounded-3xl font-sotify">{status}</button>
                </a>
                <div className="p-5">
                    <div className="justify-between flex items-center">
                        <a href="#" >
                            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{title}</h5>
                        </a>
                        <span className="text-[#EB664E] font-semibold">${price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <IoLocationOutline />
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{location}</p>
                    </div>
                    <div className="flex justify-around items-center">
                        <div className="flex items-center gap-2">
                            <FaBed />
                            <p>{bedrooms}Bads</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <FaBath />
                            <p>{bathrooms}Baths</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbResize />
                            <p>{propertyDetails?.flatSize}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
CardDiscover.propTypes = {
    item: PropTypes.object
  }