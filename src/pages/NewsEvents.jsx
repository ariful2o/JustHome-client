// import {useLoaderData} from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import DeparmentContack from '../components/DeparmentContack'
import { useEffect, useState } from 'react'
import ComminBanner from '../components/ComminBanner'

export default function NewsEvents() {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch('news.json')
      .then(res => res.json())
      .then(data => setNews(data))
  }, [])
  // const news=useLoaderData()
  return (
    <>
      <ComminBanner location={'News & Events'}></ComminBanner>
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
