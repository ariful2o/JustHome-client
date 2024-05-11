import img2 from '../../assets/slider/div.elementor-element (1).png'
import img1 from '../../assets/slider/div.elementor-element.png'
import img3 from '../../assets/slider/elements (1).png'
import img4 from '../../assets/slider/elements.png'


export default function Slider() {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src={img2} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-8 bottom-1">
          <a href="#slide4" className="btn rounded-full bg-transparent">❮</a>
          <a href="#slide2" className="btn rounded-full bg-transparent">❯</a>
        </div>
        <div className="absolute transform -translate-y-1/2 h-full top-[300px] bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="mt-32 space-y-4 text-white ml-10">
            <p className="border border-base-300 py-3 px-2 rounded-lg inline">LET US GUIDE YOUR HOME</p>
            <h2 className="font-bold text-6xl text-white font-sotify">Find Your <span className="text-warning italic font-sotify">Dream</span>House</h2>
            <p>From as low as $10 per day with limited time offer discounts</p>
            <p className="text-[#5c9c91] font-semibold">Explore all things property</p>
            <div className="flex gap-3">
              <form className="max-w-md mt-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="w-96 block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All Properties For Sale & Rent" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src={img1} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-8 bottom-1">
          <a href="#slide1" className="btn rounded-full bg-transparent">❮</a>
          <a href="#slide3" className="btn rounded-full bg-transparent">❯</a>
        </div>
        <div className="absolute transform -translate-y-1/2 h-full top-[300px] bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="mt-32 space-y-4 text-white ml-10">
            <p className="border border-base-300 py-3 px-2 rounded-lg inline">LET US GUIDE YOUR HOME</p>
            <h2 className="font-bold text-6xl text-white font-sotify">Find Your <span className="text-warning italic font-sotify">Dream</span>House</h2>
            <p>From as low as $10 per day with limited time offer discounts</p>
            <p className="text-[#5c9c91] font-semibold">Explore all things property</p>
            <div className="flex gap-3">
              <form className="max-w-md mt-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="w-96 block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All Properties For Sale & Rent" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src={img3} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-8 bottom-1">
          <a href="#slide2" className="btn rounded-full bg-transparent">❮</a>
          <a href="#slide4" className="btn rounded-full bg-transparent">❯</a>
        </div>
        <div className="absolute transform -translate-y-1/2 h-full top-[300px] bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="mt-32 space-y-4 text-white ml-10">
            <p className="border border-base-300 py-3 px-2 rounded-lg inline">LET US GUIDE YOUR HOME</p>
            <h2 className="font-bold text-6xl text-white font-sotify">Find Your <span className="text-warning italic font-sotify">Dream</span>House</h2>
            <p>From as low as $10 per day with limited time offer discounts</p>
            <p className="text-[#5c9c91] font-semibold">Explore all things property</p>
            <div className="flex gap-3">
              <form className="max-w-md mt-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="w-96 block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All Properties For Sale & Rent" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src={img4} className="w-full" />
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 gap-8 bottom-1">
          <a href="#slide3" className="btn rounded-full bg-transparent">❮</a>
          <a href="#slide1" className="btn rounded-full bg-transparent">❯</a>
        </div>
        <div className="absolute transform -translate-y-1/2 h-full top-[300px] bg-gradient-to-r from-[#151515] to-[#15151500]">
          <div className="mt-32 space-y-4 text-white ml-10">
            <p className="border border-base-300 py-3 px-2 rounded-lg inline">LET US GUIDE YOUR HOME</p>
            <h2 className="font-bold text-6xl text-white font-sotify">Find Your <span className="text-warning italic font-sotify">Dream</span>House</h2>
            <p>From as low as $10 per day with limited time offer discounts</p>
            <p className="text-[#5c9c91] font-semibold">Explore all things property</p>
            <div className="flex gap-3">
              <form className="max-w-md mt-10">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only ">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="w-96 block p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="All Properties For Sale & Rent" required />
                  <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
