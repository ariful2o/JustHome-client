import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function NewsCard({ item }) {

    const { image, description, title, id, date } = item;
    const details = description.slice(0, 200)
    return (
        <div className='my-10 shadow-xl'>
            <div className="flex">
                <img className="w-96 max-h-96 p-1 lg:p-10 animate__animated animate__zoomIn" src={image} alt="" />
                <div className="">
                    <h3 className="p-4 font-medium text-3xl">{date}</h3>
                    <h1 className="text-[#353372] text-xl lg:text-4xl font-bold font-sotify">{title}</h1>
                    <div className="divider"></div>
                    <p className="text-[#959595] text-xl font-serif p-4">{details}</p>
                    <Link to={`/news/${id}`} className="btn btn-outline btn-info ml-3 text-white rounded-3xl my-5 opacity-80">Read More</Link>
                </div>
            </div>
        </div>
    )
}
NewsCard.propTypes = {
    item: PropTypes.object.isRequired
}