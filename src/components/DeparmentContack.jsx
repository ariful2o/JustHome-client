import { FaFacebookSquare, FaInstagram, FaSkype, FaTwitterSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";

export default function DeparmentContack() {
    return (
        <div className=" p-4 my-5">
            <div className="p-9 bg-[#192F59]">
                <h3 className="text-2xl text-white font-vibes">Department Contact Info</h3>
                <p className="text-lg my-3 text-[#3DB166]">Bachelor Of Science in Business<br />  Administration</p>
                <p className="my-4 text-white">1810 Campus Way NE<br />
                    Bothell, WA 98011-8246</p>
                <p className="my-4 mb-9 text-white">+1-2345-5432-45<br /> bsba@kuuniver.edu</p>
                <p className="my-3  text-[#3DB166]">Mon – Fri 9:00A.M. – 5:00P.M.</p>
                <h3 className="text-xl font-bold text-white my-4">Social Info</h3>
                <div className="text-white flex gap-5 text-2xl my-6">
                    <FaFacebookSquare />
                    <IoLogoLinkedin />
                    <FaSkype />
                    <FaTwitterSquare />
                    <FaInstagram />
                </div>

                <button className="btn btn-error rounded-3xl text-white my-8">Student Resourrces</button>
            </div>

        </div>
    )
}
