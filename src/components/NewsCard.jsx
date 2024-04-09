
export default function NewsCard({ item }) {

    const { blog_image, estate_title, description, author_name, segment_name, date } = item;

    console.log(blog_image)
    return (<>
        <img className="w-full p-10" src={blog_image} alt="" />
        <div className="flex gap-8 p-4">
            <h3 className=""><span className="font-bold text-3xl">02</span><br /> JUN</h3>
            <div className="">
                <h1 className="text-[#353372] text-4xl font-bold font-serif">{estate_title}</h1>
                <p className="text-[#959595] text-xl font-serif italic my-5">{date} / By {author_name} / {segment_name}</p>
            </div>
        </div>
        <p className="text-[#959595] text-xl font-serif p-4">{description}</p>
        <button className="btn btn-error ml-3 text-white rounded-3xl">Read More</button>
    </>
    )
}
