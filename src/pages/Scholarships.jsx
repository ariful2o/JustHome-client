import { Helmet } from "react-helmet-async";
import BannerImg from "../components/BannerImg";
import ComminBanner from "../components/ComminBanner";


export default function Scholarships() {
  return (
    <div>
      <Helmet>
        <title>House Rent| Services</title>
      </Helmet>
      <ComminBanner location={'Services'}></ComminBanner>
      <div className="bg-[#43CEC9] text-center">
        <h1 className="text-4xl font-black text-white py-5">Our Services</h1>
        <p className="text-2xl font-sotify text-[#162C5A]">With a focus on whole child development and individualized services</p>

        <div className="flex flex-col lg:flex-row gap-8 justify-center my-20">
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://elementor.emjecreative.com/architecto/wp-content/uploads/sites/5/2023/08/image-QDVLVDA.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify text-[#162C5A]">Exchange Information</h2>
              <p className="my-6">We strive to improve the lives of our students through education of Academic, Behavioral, Cognitive, and Social Skills.</p>
            </div>
          </div>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://elementor.emjecreative.com/architecto/wp-content/uploads/sites/5/2023/08/asian-colleague-workers-people-wearing-protective-WH7JLAZ.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify text-[#162C5A]">Tour Intake Evaluation</h2>
              <p className="my-6">It is important to have teachers & therapists engaging students to learn and parents involved in both student programs and school activities</p>
            </div>
          </div>
          <div className="card w-full lg:w-96 bg-base-100 shadow-xl">
            <figure className="lg:px-10 pt-10">
              <img src="https://elementor.emjecreative.com/architecto/wp-content/uploads/sites/5/2023/08/image-C6HGQRS-2048x974.jpg" alt="" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-sotify text-[#162C5A]">Eligibility</h2>
              <p className="my-6">We strive to improve the lives of our students through education of Academic, Behavioral, Cognitive, and Social Skills.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-center text-[#43CEC6] font-black text-4xl">what we offering</h2>
        <p className="text-xl text-center font-sotify text-[#162C5A]">We work really hard to make sure we can offer each You exactly what they need</p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-20 m-10">
          <div className="card w-72 bg-base-200 mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-sotify my-8 text-[#D6C8B7]">01</h2>
              <h2 className="card-title text-[#B19784]">Architecture</h2>
              <p className="text-[#888AAA]">Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat mollis turpis.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-ghost text-[#717171]">Read More</button>
              </div>
            </div>
          </div>

          <div className="card w-72 bg-base-200 mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-sotify my-8 text-[#D6C8B7]">02</h2>
              <h2 className="card-title text-[#B19784]">Interior Design</h2>
              <p className="text-[#888AAA]">Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat mollis turpis.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-ghost text-[#717171]">Read More</button>
              </div>
            </div>
          </div>

          <div className="card w-72 bg-base-200 mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-sotify my-8 text-[#D6C8B7]">03</h2>
              <h2 className="card-title text-[#B19784]">Structure</h2>
              <p className="text-[#888AAA]">Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat mollis turpis.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-ghost text-[#717171]">Read More</button>
              </div>
            </div>
          </div>
          <div className="card w-72 bg-base-200 mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-sotify my-8 text-[#D6C8B7]">04</h2>
              <h2 className="card-title text-[#B19784]">Visualization</h2>
              <p className="text-[#888AAA]">Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat mollis turpis.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-ghost text-[#717171]">Read More</button>
              </div>
            </div>
          </div>
          <div className="card w-72 bg-base-200 mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-sotify my-8 text-[#D6C8B7]">05</h2>
              <h2 className="card-title text-[#B19784]">Landscape</h2>
              <p className="text-[#888AAA]">Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat mollis turpis.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-ghost text-[#717171]">Read More</button>
              </div>
            </div>
          </div>
          <div className="card w-72 bg-base-200 mx-auto">
            <div className="card-body items-center text-center">
              <h2 className="card-title text-4xl font-sotify my-8 text-[#D6C8B7]">06</h2>
              <h2 className="card-title text-[#B19784]">Structure</h2>
              <p className="text-[#888AAA]">Cras mollis turpis a ipsum ultes, nec cond imentum ipsum consequat mollis turpis.</p>
              <div className="card-actions justify-center">
                <button className="btn btn-ghost text-[#717171]">Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-20">
        <h2 className="text-center text-[#43CEC6] font-black text-4xl">Latest News</h2>
        <p className="text-xl text-center font-sotify text-[#162C5A]">What it’s like to be an interior innovative designer?</p>

        <div className="flex flex-col lg:flex-row gap-16 my-9 justify-center">
          <div className="w-[467px]  shadow-xl">
            <div className="flex">
              <img className="w-1/2 h-56" src="https://kitss.themescamp.com/archo/wp-content/uploads/sites/2/2020/06/port2-3.jpg" alt="" />
              <div className="flex flex-col items-center justify-center ml-8">
                <h2 className="text-2xl font-sotify"> Mark Finlay Architects And Interiors</h2>
                <button className="mt-9 text-[#a1a1a1]">Read more</button>
              </div>
            </div>
          </div>
          <div className="w-[467px] shadow-xl">
            <div className="flex">
              <img className="w-1/2 h-56" src="https://kitss.themescamp.com/archo/wp-content/uploads/sites/2/2020/06/port5-1.jpg" alt="" />
              <div className="flex flex-col items-center justify-center ml-8">
                <h2 className="text-2xl font-sotify">You Should Know About Modern Furniture.</h2>
                <button className="mt-9 text-[#a1a1a1]">Read more</button>
              </div>
            </div>
          </div>
        </div>
        <button className="mx-auto block my-4 rounded-3xl bg-[#ccbe86] px-8 py-3">MORE</button>
      </div>
      <BannerImg />
    </div>

  )
}
