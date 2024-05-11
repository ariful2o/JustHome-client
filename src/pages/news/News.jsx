import { useLoaderData } from "react-router-dom"
import ComminBanner from "../../components/ComminBanner"
import NewsCard from "../../components/NewsCard"


export default function News() {
  const news = useLoaderData()
  if (!Array.isArray(news)) {
    return <div className="w-full flex justify-center"><span className="loading loading-spinner min-h-svh text-error mx-auto"></span></div>
  }
  return (
    <>
      <ComminBanner location={'News & Event'}></ComminBanner>
      <div>
        {
          news.map(item=><NewsCard key={item.id} item={item}></NewsCard>)
        }
      </div>
    </>
  )
}
