import {useLoaderData} from 'react-router-dom'
import NewsCard from '../components/NewsCard'

export default function NewsEvents() {
  const news=useLoaderData()
  return (
    <>
     {
      news.map((item)=>{
        return <NewsCard key={item.id} item={item}></NewsCard>
      })
     }
    </>
  )
}
