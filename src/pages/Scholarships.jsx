import { Helmet } from "react-helmet-async";
import BannerImg from "../components/BannerImg";
import ComminBanner from "../components/ComminBanner";


export default function Scholarships() {
  return (
    <div>
      <Helmet>
        <title>Light School House | Schilarships</title>
      </Helmet>
      <ComminBanner location={'Scholarships'}></ComminBanner>
      <div className="bg-[#43CEC9] text-center">
        <h1 className="text-4xl font-black text-white py-5">ADMISSIONS PROCESS </h1>
        <p className="text-2xl font-sotify text-[#162C5A]">With a focus on whole child development and individualized programs</p>

        <div className="flex flex-col lg:flex-row gap-8 justify-center my-20">
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-12-370x233.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify text-[#162C5A]">Exchange Information</h2>
              <p className="my-6">We strive to improve the lives of our students through education of Academic, Behavioral, Cognitive, and Social Skills.</p>
            </div>
          </div>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-4-370x233.jpg " alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify text-[#162C5A]">Tour Intake Evaluation</h2>
              <p className="my-6">It is important to have teachers & therapists engaging students to learn and parents involved in both student programs and school activities</p>
            </div>
          </div>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-15-370x233.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify text-[#162C5A]">Eligibility</h2>
              <p className="my-6">We strive to improve the lives of our students through education of Academic, Behavioral, Cognitive, and Social Skills.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-center text-[#43CEC6] font-black text-4xl">WHAT YOU WILL NEED</h2>
        <p className="text-xl text-center font-sotify text-[#162C5A]">We work really hard to make sure we can offer each student exactly what they need</p>

        <div className="flex flex-col lg:flex-row justify-center gap-20 my-10">
          <div className="w-28">
            <span className="px-1 py-7 my-2 rounded-full bg-[#FFD223] text-4xl block text-center font-black">1</span>
            <div className="text-center text-[#A1A1A1]">JSA CLINICAL GROUP INTAKE FORMS</div>
          </div>
          <div className="w-28">
            <span className="px-1 py-7 my-2 rounded-full bg-[#FFD223] text-4xl block text-center font-black">2</span>
            <div className="text-center text-[#A1A1A1]">CURRENT INDIVIDUALIZED EDUCATION PLAN</div>
          </div>
          <div className="w-28">
            <span className="px-1 py-7 my-2 rounded-full bg-[#FFD223] text-4xl block text-center font-black">3</span>
            <div className="text-center text-[#A1A1A1]">RECENT ASSESSMENTS</div>
          </div>
          <div className="w-28">
            <span className="px-1 py-7 my-2 rounded-full bg-[#FFD223] text-4xl block text-center font-black">4</span>
            <div className="text-center text-[#A1A1A1]">ABA TREATMENT PLANS WITH GOALS</div>
          </div>
          <div className="w-28">
            <span className="px-1 py-7 my-2 rounded-full bg-[#FFD223] text-4xl block text-center font-black">5</span>
            <div className="text-center text-[#A1A1A1]">PAST BEHAVIOR PLANS AND REPORTS</div>
          </div>
          <div className="w-28">
            <span className="px-1 py-7 my-2 rounded-full bg-[#FFD223] text-4xl block text-center font-black">6</span>
            <div className="text-center text-[#A1A1A1]">ANY OTHER DOCUMENTATION</div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-center text-[#43CEC6] font-black text-4xl">SCHOLARSHIPS</h2>
        <p className="text-xl text-center font-sotify text-[#162C5A]">Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper</p>

        <div className="flex flex-col lg:flex-row gap-16 my-9 justify-center">
          <div className="w-[467px]  shadow-xl">
            <div className="flex">
              <img className="w-1/2 h-56" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-5-1170x658.jpg" alt="" />
              <div className="flex flex-col items-center justify-center ml-8">
                <h2 className="text-2xl font-sotify">The Gardiner Scholarship</h2>
                <button className="mt-9 text-[#a1a1a1]">Read more</button>
              </div>
            </div>
          </div>
          <div className="w-[467px] shadow-xl">
            <div className="flex">
              <img className="w-1/2 h-56" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/post-16-1170x658.jpg" alt="" />
              <div className="flex flex-col items-center justify-center ml-8">
                <h2 className="text-2xl font-sotify">The McKay Scholarship</h2>
                <button className="mt-9 text-[#a1a1a1]">Read more</button>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto block my-4 rounded-3xl bg-[#FFD223] px-8 py-3">MORE SCHOLARSHIPS</button>
      </div>
      <BannerImg/>
    </div>

  )
}
