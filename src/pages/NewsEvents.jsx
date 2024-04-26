// import {useLoaderData} from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import ComminBanner from '../components/ComminBanner'
import DeparmentContack from '../components/DeparmentContack'
import NewsCard from '../components/NewsCard'

export default function NewsEvents() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('booking.json')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])
  // const news=useLoaderData()
  console.log(news)
  return (
    <>
    <Helmet>
        <title>House Rent| News & Events</title>
      </Helmet>
      <ComminBanner location={'Residential'}></ComminBanner>
      <div className='grid grid-cols-1 lg:grid-cols-4'>
        <div className="col-span-3 ">
          {
            news.map((item) => {
              return <NewsCard key={item.id} item={item}></NewsCard>
            })
          }
        </div>
        <DeparmentContack />
      </div>
    </>
  )
}
