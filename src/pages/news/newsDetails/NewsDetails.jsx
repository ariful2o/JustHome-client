import { BiLike } from 'react-icons/bi'
import { FaEye } from 'react-icons/fa'
import { useLoaderData, useParams } from 'react-router-dom'

export default function NewsDetails() {
    const news = useLoaderData()
    let { id } = useParams()

    if (!Array.isArray(news)) {
        return <div className="w-full flex justify-center"><span className="loading loading-spinner min-h-svh text-error mx-auto"></span></div>
    }
    const detailsNews = news.find((item) => item.id === parseInt(id))
    const { image, title, date, category, description, view, like } = detailsNews;
    return (
        <div className="flex flex-col lg:flex-row gap-10 my-20">
            <div className="w-1/2 relative">
                <img className='w-full max-h-full' src={image} alt="" />
                <div className="absolute bottom-2 left-8 backdrop-blur-2xl w-full  max-w-xl">
                    <div className="flex justify-between py-3 px-6 text-white font-semibold rounded-xl ">
                        <p className="">{category}</p>
                        <div className="flex gap-6">
                            <div className="flex items-center gap-1 ">
                                <FaEye />
                                <p>{view}</p>
                            </div>
                            <div className="flex items-center gap-1 ">
                                <BiLike />
                                <p>{like}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-1/2 space-y-6">
                <p>{date}</p>
                <h2 className="text-4xl font-bold font-sotify">Title : {title}</h2>
                <p className=""><span className='font-bold text-xl'>Description :</span>{description}</p>
            </div>
        </div>
    )
}