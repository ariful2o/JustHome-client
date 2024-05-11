import { useEffect, useState } from "react"
import CardDiscover from "../../components/CardDiscover"
import { IoMdArrowForward } from "react-icons/io"

export default function DiscoverDeals() {
    const [booking, setBooking] = useState([])
    useEffect(() => {
        fetch('./booking.json')
            .then(res => res.json())
            .then(data => setBooking(data))
    }, [])
    const slice = booking?.slice(5, 8)
    return (
        <div className="mx-auto w-11/12">
            <div className="pl-0 lg:pl-14 flex flex-col lg:flex-row justify-between">
                <div className="max-w-xl">
                    <h2 className="text-4xl font-bold mb-6 font-sotify">Discover Our Best Deals</h2>
                    <p className="text-sm text-[#1A1A1A66]">Here&apos;re the most recent sales, discounts and deals we could find in one place. Score Sunglass Lenses and Frames for 20% Off at Lensabl Until May 31.</p>
                </div>
                <div className="flex items-center gap-2 mt-4">
                    <p className="font-sotify">View All Properties</p>
                    <IoMdArrowForward />
                </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                {
                    slice.map(item => <CardDiscover key={item.id} item={item}></CardDiscover>)
                }
            </div>
        </div>
    )
}
