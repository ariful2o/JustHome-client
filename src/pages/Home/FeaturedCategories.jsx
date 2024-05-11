import img1 from '../../assets/icons/div.features-box-image.png'
import img2 from '../../assets/icons/div.features-box-image (1).png'
import img3 from '../../assets/icons/image.png'
import img4 from '../../assets/icons/Icon.png'
import img5 from '../../assets/icons/Icon (1).png'
import img6 from '../../assets/icons/Icon (2).png'
import img7 from '../../assets/icons/Icon (3).png'
import img8 from '../../assets/icons/Icon (4).png'

export default function FeaturedCategories() {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="my-20 lg:my-32">
                <h2 className="text-4xl font-bold text-center mb-6 font-sotify">How It works? Find a perfect home</h2>
                <p className="text-center text-sm text-[#1A1A1A66]">Feature testimonials from satisfied clients who have bought, sold, or rented properties</p>
                <div className="flex gap-4 justify-around text-center my-20">
                    <div className="max-w-56 space-y-4">
                        <img className='mx-auto' src={img1} alt="" />
                        <h3 className="text-2xl font-sotify">Find Real Estate</h3>
                        <p className='text-sm text-[#1A1A1AB3]'>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco</p>
                    </div>
                    <div className="max-w-56 space-y-4">
                        <img className='mx-auto' src={img2} alt="" />
                        <h3 className="text-2xl font-sotify">Meet Relator</h3>
                        <p className='text-sm text-[#1A1A1AB3]'>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco</p>
                    </div>
                    <div className="max-w-56 space-y-4">
                        <img className='mx-auto' src={img3} alt="" />
                        <h3 className="text-2xl font-sotify">Take The Keys</h3>
                        <p className='text-sm text-[#1A1A1AB3]'>Sumo petentium ut per, at his wisim utinam adipiscing. Est ei graeco</p>
                    </div>
                </div>
            </div>
            <div className="my-20 lg:my-60 space-y-4">
                <div className=" lg:pl-20">
                    <h2 className="text-4xl font-bold mb-6 font-sotify">Featured Categories</h2>
                    <p className="">Feature testimonials from satisfied clients who have bought, sold, or rented properties</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-5">
                    <div className="w-52 h-64 flex flex-col justify-center items-center hover:bg-base-200">
                        <img className='mx-auto my-5' src={img4} alt="" />
                        <h3 className="text-xl font-sotify">Single-family</h3>
                        <p className='text-sm text-[#1A1A1A66]'>2 Properties</p>
                    </div>
                    <div className="w-52 h-64 flex flex-col justify-center items-center hover:bg-base-200">
                        <img className='mx-auto my-5' src={img5} alt="" />
                        <h3 className="text-xl font-sotify">Apartment</h3>
                        <p className='text-sm text-[#1A1A1A66]'>22 Properties</p>
                    </div>
                    <div className="w-52 h-64 flex flex-col justify-center items-center hover:bg-base-200">
                        <img className='mx-auto my-5' src={img6} alt="" />
                        <h3 className="text-xl font-sotify">Student Housing</h3>
                        <p className='text-sm text-[#1A1A1A66]'>5 Properties</p>
                    </div>
                    <div className="w-52 h-64 flex flex-col justify-center items-center hover:bg-base-200">
                        <img className='mx-auto my-5' src={img7} alt="" />
                        <h3 className="text-xl font-sotify">Town Houses</h3>
                        <p className='text-sm text-[#1A1A1A66]'>21 Properties</p>
                    </div>
                    <div className="w-52 h-64 flex flex-col justify-center items-center hover:bg-base-200">
                        <img className='mx-auto my-5' src={img8} alt="" />
                        <h3 className="text-xl font-sotify">Vacation Rentals</h3>
                        <p className='text-sm text-[#1A1A1A66]'>3 Properties</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
