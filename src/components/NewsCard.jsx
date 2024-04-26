import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function NewsCard({ item }) {

    const { image,details, title ,id}  = item;

    return (
    <div className='my-10 shadow-xl'>
        <img className="w-full p-1 rounded-xl lg:p-10 animate__animated animate__zoomIn" src={image} alt="" />
        <div className="flex flex-col lg:flex-row gap-1 lg:gap-8 p-4">
            <h3 className="p-4"><span className="font-bold text-3xl">02</span><br /> JUN</h3>
            <div className="divider  lg:divider-horizontal"></div>
            <div className="">
                <h1 className="text-[#353372] text-xl lg:text-4xl font-bold font-sotify">{title}</h1>
                {/* <p className="text-[#959595] text-xl font-serif italic my-5">{date} / By {author_name} / {segment_name}</p> */}
            </div>
        </div>
        <p className="text-[#959595] text-xl font-serif p-4">{details}</p>
        <Link to={`/newsEvents/${id}`} className="btn btn-outline btn-info ml-3 text-white rounded-3xl my-5 opacity-80">Read More</Link>
    </div>
    )
}
NewsCard.propTypes={
    item:PropTypes.object.isRequired
}