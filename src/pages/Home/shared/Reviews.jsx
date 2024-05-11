import img1  from '../../../assets/reviews/h62.png.png'
import img2  from '../../../assets/reviews/test1.png.svg'
import icon1  from '../../../assets/reviews/SVG.png'
export default function Reviews() {
    return (
        <div className=" max-h-[881px] bg-[#1A1A1A]">
            <div className="flex flex-col lg:flex-row justify-between items-center  py-28">
                <div className="max-w-lg text-white mx-auto">
                    {/* <h1 className="text-5xl font-bold">Hello there</h1> */}
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                            <img src={img2} alt="" />
                            <div>
                            <h2 className='text-xl'>Cameron Williamson</h2>
                            <p className='font-sotify'>Designer</p>
                            </div>
                        </div>
                        <img src={icon1} alt="" />
                    </div>
                    <p className="py-6 font-sotify">Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.</p>
                    <button className="btn bg-[#E7C873] mt-10">Get Started</button>
                </div>
                <div className="">
                    <img className='p-28' src={img1} alt="" />
                </div>
            </div>
        </div>
    )
}
