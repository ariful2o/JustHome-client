import { Link, useLoaderData, useParams } from 'react-router-dom'

export default function NewsDetails() {
    const news = useLoaderData()
    let { id } = useParams()

    const detailsNews = news.find((item) => item.id === id)
    const { blog_image, estate_title, description,  summary ,space,description_space,title2,blog_image2,description2,description3,facilities,Writers} = detailsNews;
    return (
        <div className='mx-auto w-8/12'>
            <img className='w-full' src={blog_image} alt="" />
            <p className='my-5 text-[#959595]'>{summary}</p>
            <h1 className="text-[#353372] text-3xl font-bold font-serif my-5">{estate_title}</h1>
            <p className='my-5 text-[#959595]'>{description}</p>
            <p className='my-3 p-7 italic text-xl'>" {space} "</p>
            <p className='my-5 text-[#959595]'>{description_space}</p>
            <h1 className="text-[#353372] text-3xl font-bold font-serif my-5">{title2}</h1>
            <p className='my-5 text-[#959595]'>{description2}</p>
            <img className='w-full' src={blog_image2} alt="" />
            <p className='my-5 text-[#959595]'>{description3}</p>
            <ol className='pl-6 list-disc'>
                {
                    facilities.map((item, index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })
                }
            </ol>
                <p className='my-5 text-[#959595]'>{Writers}</p>
                <Link to='/newsEvents' className="btn btn-primary">Back</Link>
        </div>
    )
}
