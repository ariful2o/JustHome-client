import { useLoaderData, useParams } from "react-router-dom"


export default function RentalDetails() {
    let { id } = useParams()
    const newsLodad=useLoaderData()
   const news=newsLodad.find(item=>item.id==id)
    console.log(news)
  return (
    <div>
      <div className="">
        <img src={news.image} alt="" />
      </div>
    </div>
  )
}
