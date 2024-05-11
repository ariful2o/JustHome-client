import { IoMdArrowForward } from "react-icons/io";
import CardDiscover from "../../components/CardDiscover";
import { useEffect, useState } from "react";


export default function DiscroverDealsAll() {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./booking.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="bg-[#1F4B43]">
            <div className="pl-0 lg:pl-14 flex flex-col lg:flex-row justify-between py-20 text-white">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-bold mb-6 font-sotify">Discover Our Best Deals</h2>
                    <p className="text-sm text-[#ffffff66]">Here&apos;re the most recent sales, discounts and deals we could find in one place. Score Sunglass Lenses and Frames for 20% Off at Lensabl Until May 31.</p>
                </div>
                <div className="flex items-center gap-2 mt-4 mr-14">
                    <p className="font-sotify">View All Properties</p>
                    <IoMdArrowForward />
                </div>
            </div>
            <div className="w-11/12 mx-auto">
                <div className="carousel rounded-box w-full gap-2 mb-10">
                    {
                        services.map(item => <div className="carousel-item" key={item.id}>
                            <CardDiscover item={item}></CardDiscover>
                        </div>)
                    }
                </div>
            </div>
        </div>
    )
}
