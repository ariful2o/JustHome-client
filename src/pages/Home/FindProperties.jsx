import { IoMdArrowForward } from 'react-icons/io'
import img1 from '../../assets/Cities/h61.jpg.png'
import img2 from '../../assets/Cities/h62.jpg.png'
import img3 from '../../assets/Cities/h63.jpg.png'
import img4 from '../../assets/Cities/h64.jpg.png'
import img5 from '../../assets/Cities/h65.jpg.png'
import icon1 from '../../assets/icons/worlds_leading/Link → b1.png.png'
import icon2 from '../../assets/icons/worlds_leading/Link → b2.png.png'
import icon3 from '../../assets/icons/worlds_leading/Link → b3.png.png'
import icon4 from '../../assets/icons/worlds_leading/Link → b4.png.png'
import icon5 from '../../assets/icons/worlds_leading/Link → b5.png.png'
import icon6 from '../../assets/icons/worlds_leading/Link → b6.png.png'

export default function FindProperties() {
    return (
        <div className='w-11/12 mx-auto'>
            <div className="flex flex-col lg:flex-row justify-between my-10">
                <div className="">
                    <h2 className="text-2xl lg:text-4xl font-sotify">Find Properties on These Cities</h2>
                    <p className="text-sm my-4">let&apos;s delve into the numbers and provide some descriptions related to them.</p>
                </div>
                <div className="flex items-center gap-2">
                    <p className='font-sotify'>View All Cities</p>
                    <IoMdArrowForward />
                </div>
            </div>
            <div className="grid grid-cols-1  lg:grid-cols-3 gap-7">
                <div className="row-span-1 lg:row-span-2 relative">
                    <img className="rounded-2xl w-full" src={img1} alt="" />
                    <div className="absolute bottom-4 w-11/12 left-4 backdrop-blur-2xl rounded-2xl py-2">
                        <p className='text-xs pl-6 text-white'>8 Prorerties</p>
                        <h4 className="text-xl pl-6 text-white font-sotify">New York</h4>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-2xl w-full" src={img2} alt="" />
                    <div className="absolute bottom-4 w-11/12 left-4 backdrop-blur-2xl rounded-2xl py-2">
                        <p className='text-xs pl-6 text-white'>2 Prorerties</p>
                        <h4 className="text-xl pl-6 text-white font-sotify">Chicago</h4>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-2xl w-full" src={img3} alt="" />
                    <div className="absolute bottom-4 w-11/12 left-4 backdrop-blur-2xl rounded-2xl py-2">
                        <p className='text-xs pl-6 text-white'>1 Prorerties</p>
                        <h4 className="text-xl pl-6 text-white font-sotify">Los Angeles</h4>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-2xl w-full" src={img4} alt="" />
                    <div className="absolute bottom-4 w-11/12 left-4 backdrop-blur-2xl rounded-2xl py-2">
                        <p className='text-xs pl-6 text-white'>0 Prorerties</p>
                        <h4 className="text-xl pl-6 text-white font-sotify">San Diego</h4>
                    </div>
                </div>
                <div className="relative">
                    <img className="rounded-2xl w-full" src={img5} alt="" />
                    <div className="absolute bottom-4 w-11/12 left-4 backdrop-blur-2xl rounded-2xl py-2">
                        <p className='text-xs pl-6 text-white'>3 Prorerties</p>
                        <h4 className="text-xl pl-6 text-white font-sotify">Fiorida</h4>
                    </div>
                </div>

            </div>
                <p className="text-center my-10 mt-20">Thousands of world’s leading companies trust Space</p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-5 mb-20">
                <img src={icon1} alt="" />
                <img src={icon2} alt="" />
                <img src={icon3} alt="" />
                <img src={icon4} alt="" />
                <img src={icon5} alt="" />
                <img src={icon6} alt="" />
            </div>
        </div>
    )
}
