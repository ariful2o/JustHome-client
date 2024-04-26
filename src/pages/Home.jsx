import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import BannerImg from "../components/BannerImg";
import HelpCard from "../components/HelpCard";
import SwiperSlider from "../components/SwiperSlider";
import { Link, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa6";
import { BiLike } from "react-icons/bi";

export default function Home() {
  const booking = useLoaderData()
  const [news, setNews] = useState([])
  useEffect(() => {
    fetch('news.json')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])
  const sortNews = news.slice(0, 3)

  return (
    <div>
      <Helmet>
        <title>House Rent| Home</title>
      </Helmet>
      <SwiperSlider />
      <Banner />
      <HelpCard booking={booking}></HelpCard>
      <BannerImg />
      <div className="flex flex-col md:flex-row">
      {
        sortNews.map(item => {
          return <div key={item.id} className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
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
        })
      }
      </div>
      <div className="w-full justify-center flex">
      <Link to='/programs' className="btn btn-ghost my-8">Show All</Link>
      </div>
    </div>
  )
}
