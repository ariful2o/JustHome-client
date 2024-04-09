import {useLoaderData} from 'react-router-dom'
import NewsCard from '../components/NewsCard'
import DeparmentContack from '../components/DeparmentContack'

export default function NewsEvents() {
  const news=useLoaderData()
  return (
    <div className='grid grid-cols-4'>
     <div className="col-span-3">
     {
      news.map((item)=>{
        return <NewsCard key={item.id} item={item}></NewsCard>
      })
     }
     </div>
     <DeparmentContack/>
    </div>
  )
}
