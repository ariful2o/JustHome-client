

export default function HelpCard() {
    return (
        <div className="bg-[#43CEC9] text-center" >
            <h1 className="text-6xl font-bold text-white pt-32 mb-10">HOW WE HELP</h1>
            <h4 className="text-4xl text-[#162C5A] font-semibold mb-32 max-w-xl mx-auto">We work individually with each family to
                understand their specific needs</h4>

            <div className="flex flex-col lg:flex-row gap-5 justify-evenly pt-8">
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/how1-740x466.jpg" alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#162C5A]">Educate</h2>
                    <p>We strive to improve the lives of our students through education of Academic, Behavioral, Cognitive, and Social Skills.</p>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/how2-740x466.jpg" alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#162C5A]">Engage</h2>
                    <p>It is important to have teachers & therapists engaging students to learn and parents involved in both student programs and school activities</p>
                </div>
            </div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/how3-740x466.jpg" alt="" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-[#162C5A]">Jnspire</h2>
                    <p>We strive to improve the lives of our students through education of Academic, Behavioral, Cognitive, and Social Skills.</p>
                </div>
            </div>
            </div>

        </div>
    )
}
