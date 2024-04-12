import ComminBanner from "../components/ComminBanner";
import { useLoaderData } from 'react-router-dom'


export default function Programs() {
  const programs = useLoaderData()
  console.log(programs)
  return (
    <div>
      <ComminBanner location={'Programs'}></ComminBanner>
      <h2 className="text-5xl text-[#43CEC6] text-center font-black my-10">OUR PROGRAMS</h2>
      <p className="text-3xl italic mb-10 font-sotify text-[#162C5A] text-center">Make a difference life of a <br />child with special needs</p>

      <div className="justify-center flex w-full gap-4 my-20">
        <button className="btn btn-warning rounded-3xl">All Programs</button>
        <button className="btn btn-warning rounded-3xl">Family</button>
        <button className="btn btn-warning rounded-3xl">Volunteers</button>
        <button className="btn btn-warning rounded-3xl">Community</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
        {
          programs.map((item) => {
            return (
              <div key={item.id} className="relative mx-auto hover:rotate-[360deg] duration-1000">
                <img src={item.image} className="w-96 h-96 rounded-full opacity-85" alt={item.title} />
                <div className="absolute top-[15%] left-1/4">
                  <img className="mx-auto mb-0 w-32 h-40" src={item.icon} alt="" />
                  <h3 className="text-3xl font-bold italic text-[#162C5A] text-center">{item.title}</h3>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
