import { useLoaderData } from "react-router-dom"
import CardDiscover from "../../components/CardDiscover"
import ComminBanner from "../../components/ComminBanner"
import { useEffect, useState } from "react"
import NewsCard from "../../components/NewsCard"


export default function Residential() {
    const booking= useLoaderData()
    const [news,setNews]=useState([])
    useEffect(()=>{
      fetch('news.json')
      .then(res=>res.json())
      .then(data=>setNews(data))
    },[])
    const slice =news.slice(3,6)
  return (
    <div className="my-6">
      <ComminBanner location={'Residential'}></ComminBanner>
      <div className="grid grid-cols-1 md:lg:grid-cols-3 gap-8 my-20">
        {
            booking.map(item=><CardDiscover key={item.id} item={item}></CardDiscover>)
        }
      </div>
      <h1 className="text-center text-3xl font-bold text-[#162C5A]">Latest News</h1>
      {
        slice.map(item=><NewsCard key={item.id} item={item}></NewsCard>)
      }
        
    </div>
  )
}
