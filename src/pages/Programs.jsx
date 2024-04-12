import { useEffect, useState } from "react";
import ComminBanner from "../components/ComminBanner";
import { NavLink, useLoaderData } from 'react-router-dom'
import './Programs.css'


export default function Programs() {
  const programs = useLoaderData();
  const [program, setProgram] = useState([])

  useEffect(() => {
    // This function will be called when the component is mounted
    handleSort();
  }, []);

  const handleSort = (sort) => {
    setProgram(programs)
    if (sort) {
      let soryBy = programs.filter((sItem) => sItem.category === sort)
      setProgram(soryBy)
    }
    if (sort === 'all') {
      setProgram(programs)
    }
  }




  const navlinks = <>
    <NavLink onClick={() => handleSort('all')} activeClassName="active" className="btn  rounded-3xl">All Programs</NavLink>

    <NavLink onClick={() => handleSort('Family')} activeClassName="active" className="btn rounded-3xl">Family</NavLink>

    <NavLink onClick={() => handleSort('Volunteers')} activeClassName="active" className="btn rounded-3xl">Volunteers</NavLink>

    <NavLink onClick={() => handleSort('Community')} activeClassName="active" className="btn  rounded-3xl">Community</NavLink>

  </>
  return (
    <div>
      <ComminBanner location={'Programs'}></ComminBanner>
      <h2 className="text-5xl text-[#43CEC6] text-center font-black my-10">OUR PROGRAMS</h2>
      <p className="text-3xl italic mb-10 font-sotify text-[#162C5A] text-center">Make a difference life of a <br />child with special needs</p>

      <div className="justify-center flex w-full gap-4 my-20">
        {navlinks}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
        {
          program.map((item) => {
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
