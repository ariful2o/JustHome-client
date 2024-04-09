import img8 from '../assets/post-4-370x370.jpg'
export default function BannerImg() {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${img8})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-sotify">Everyone <span className="text-[#FFD223] italic">can </span>
                        make a difference

                    </h1>
                   
                    <button className="btn bg-[#FFD223] px-8 rounded-3xl my-20">Become a Volunteer</button>
                </div>
            </div>
        </div>
    )
}
