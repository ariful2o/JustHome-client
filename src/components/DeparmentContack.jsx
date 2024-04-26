import { FaFacebookSquare, FaInstagram, FaSkype, FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function DeparmentContack() {
    return (
        <div className=" p-4 my-8 ">
            <div className="p-9 bg-[#192F59]">
                <h3 className="text-2xl text-white font-vibes animate__animated animate__backInDown animate__fast">Map & Directions</h3>
                <p className="text-lg my-3 text-[#3DB166] animate__animated animate__backInDown animate__faster">Contact us live</p>
                <p className="my-4 text-white animate__animated animate__backInLeft animate__faster">1810 Campus Way NE<br />
                    Bothell, WA 98011-8246</p>
                <p className="my-4 mb-9 text-white animate__animated  animate__delay-1s animate__rotateIn">+1-2345-5432-45<br /> bsba@kuuniver.edu</p>
                <p className="my-3  text-[#3DB166] animate__backInRight animate__animated animate-delay-2s">Mon – Fri 9:00A.M. – 5:00P.M.</p>
                <h3 className="text-xl font-bold text-white my-4 animate__backInRight animate__animated animate-delay-2s">Social Info</h3>
                <div className="text-white flex gap-5 text-2xl my-6 animate__backInUp animate__animated animate-delay-2s">
                    <FaFacebookSquare />
                    <IoLogoLinkedin />
                    <FaSkype />
                    <FaTwitterSquare />
                    <FaInstagram />
                </div>

                <button className="btn bg-[#7e7038] opacity-80 rounded-3xl text-white my-8 animate__backInUp animate__animated animate-delay-2s">Have a question</button>
            </div>

        </div>
    )
}
