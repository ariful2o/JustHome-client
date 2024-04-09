import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <div className="flex flex-col lg:flex-row my-32 justify-evenly">
            <div className="max-w-2xl text-center">
                <div className="max-w-md">
                <h1 className="text-5xl text-[#43CEC6] font-bold my-10 font-dancing">SAY HELLO!</h1>
                <p className="text-3xl italic text-[#162C5A] mb-10 font-sotify">Make a difference in the life of a child with special needs, create an inclusive community and improve yourself!</p>
                <small className="block max-w-sm">Types of special needs vary in severity. People with autism, Down syndrome, dyslexia, blindness, ADHD, or cystic fibrosis, for example, may be considered to have special needs. However, special needs can also include cleft lips, or missing limbs.</small>
                </div>
                <Link to='/about' className="btn bg-[#FFD122] rounded-3xl my-10">MORE ABOUT US</Link>
            </div>
            <div className="text-center max-w-2xl shadow">
                <img className="mx-auto" src={'https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/lighthouse.png'} alt="" />
                <h1 className="text-4xl font-bold text-[#43CEC6] my-4">$345,599</h1>
                <p className="text-[#A1A1A1] mb-10 mt-2">DONATED FOR KIDS WITH SPECIAL
                    NEEDS IN 2024</p>
                <p className="text-4xl text-[#162C5A] my-4 max-w-lg font-vibes">Building meaningful, respectful relationships is the foundation for learning.</p>   
                <small className="text-[#A1A1AC]">John Smith, co-founder</small> 
            </div>
        </div>
    )
}
