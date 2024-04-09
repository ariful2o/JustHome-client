import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
export default function NewsCard({ item }) {

    const { blog_image, estate_title, description, author_name, segment_name, date ,id} = item;

    return (
    <>
        <img className="w-full p-10" src={blog_image} alt="" />
        <div className="flex gap-8 p-4">
            <h3 className="p-4"><span className="font-bold text-3xl">02</span><br /> JUN</h3>
            <div className="divider  divider-horizontal"></div>
            <div className="">
                <h1 className="text-[#353372] text-4xl font-bold font-serif">{estate_title}</h1>
                <p className="text-[#959595] text-xl font-serif italic my-5">{date} / By {author_name} / {segment_name}</p>
            </div>
        </div>
        <p className="text-[#959595] text-xl font-serif p-4">{description}</p>
        <Link to={`/newsEvents/${id}`} className="btn btn-error ml-3 text-white rounded-3xl">Read More</Link>
    </>
    )
}
NewsCard.propTypes={
    item:PropTypes.object.isRequired
}