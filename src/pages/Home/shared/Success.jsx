

export default function Success() {
  return (
    <div className="bg-[#E7C873] h-72 w-full flex flex-col lg:flex-row items-center justify-center gap-6">
        <div className="w-full lg:w-1/2 pl-2 lg:pl-20">
            <h4 className="text-2xl my-4">Take a look at our numbers</h4>
            <p>Sure, let&apos;s delve into the numbers and provide some descriptions related to them.</p>
        </div>
        <div className="w-full p-2 lg:w-1/2 flex items-center justify-center gap-10">
            <div className="">
                <h2 className="text-3xl font-bold">99%</h2>
                <p className="font-sotify mt-2">Customer satisfaction</p>
            </div>
            <div className="">
                <h2 className="text-3xl font-bold">50M+</h2>
                <p className="font-sotify mt-2">In property sales</p>
            </div>
            <div className="">
                <h2 className="text-3xl font-bold">2,600+</h2>
                <p className="font-sotify mt-2">Successful sales</p>
            </div>
        </div>
      
    </div>
  )
}
