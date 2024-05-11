import appleStore from '../../assets/download_app/Link (1).png'
import playStore from '../../assets/download_app/Link.png'
import img from '../../assets/download_app/Link → h73.jpg.png'

export default function DownloadApp() {
    return (
        <div className="bg-[#1F4B43] lg:max-h-[600px] flex flex-col-reverse lg:flex-row justify-center items-center gap-20 my-20">
            <div className="max-w-2xl space-y-6 text-white">
                <h4 className="bg-[#ffffff1f] rounded-2xl inline-block px-4 py-1">Start Today</h4>
                <h2 className="text-4xl font-medium">Download the App</h2>
                <p className="">Take classes on the go with the just home app. Stream or download
                    to watch on the plane, the subway, or wherever you learn best.</p>
                <div className="flex gap-4">
                    <img src={appleStore} alt="" />
                    <img src={playStore} alt="" />
                </div>
            </div>
            <img src={img} alt="" />
        </div>
    )
}
