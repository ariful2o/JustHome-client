import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { BiLike } from "react-icons/bi";
import { FaEye } from "react-icons/fa6";
import { Link, NavLink, useLoaderData } from 'react-router-dom';
import ComminBanner from "../components/ComminBanner";
import './Programs.css';


export default function Programs() {
  const programs = useLoaderData();
  const [program, setProgram] = useState([])
  
  useEffect(() => {
    // This function will be called when the component is mounted
    handleSort();
  }, []);
  if (!Array.isArray(program)) {
    return <div className="w-full flex justify-center"><span className="loading loading-spinner text-error mx-auto"></span></div>
  }

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
    <NavLink onClick={() => handleSort('all')} activeClassName="active" className="btn  rounded-3xl">All Rental</NavLink>

    <NavLink onClick={() => handleSort('Family House')} activeClassName="active" className="btn rounded-3xl">Family House</NavLink>

    <NavLink onClick={() => handleSort('Office')} activeClassName="active" className="btn rounded-3xl">Office</NavLink>

    <NavLink onClick={() => handleSort('Apartments')} activeClassName="active" className="btn  rounded-3xl">Apartments</NavLink>

  </>
  return (
    <div>
      <Helmet>
        <title>House Rent| Rental</title>
      </Helmet>
      <ComminBanner location={'Rental'}></ComminBanner>
      <h2 className="text-5xl text-[#43CEC6] text-center font-black my-10 font-sotify animate__rotateIn animate__animated ">OUR PROGRAMS</h2>
      <p className="text-3xl italic mb-10 font-sotify text-[#162C5A] text-center animate__animated animate__backInLeft animate__faster">Make a difference life of a <br />Your with special needs</p>

      <div className="justify-center flex w-full gap-4 my-20 animate__animated animate__lightSpeedInRight animate__fast">
        {navlinks}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 my-10">
        {
          program.map(item => {
            return (
              <Link key={item.id} to={`/programs/${item.id}`}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
                  <figure className="px-10 pt-10">
                    <img src={item.image} alt="" className="rounded-xl" />
                  </figure>
                  <div className="flex mt-2">
                    <p className="mx-auto text-[#9D9D9D]">{item.date}</p>|<p className="mx-auto text-[#9D9D9D]">{item.category}</p>
                  </div>
                  <div className="mx-auto text-[#9D9D9D]">
                    <h2 className="card-title my-4 text-[#162C5A] font-sotify">{item.title}</h2>

                    <div className="divider"></div>
                    <div className="flex gap-2 items-center text-center py-4">
                      <BiLike />
                      <p className="mr-4">{item.like} Likes</p>
                      <FaEye />
                      <p>{item.view} Views</p>
                    </div>
                  </div>

                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}
