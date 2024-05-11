import { Link } from 'react-router-dom'
import img5 from '../assets/slider/Rectangle 34624193.png'
export default function BannerImg() {
    return (
        <div className="hero min-h-[500px]" style={{ backgroundImage: `url(${img5})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold font-sotify">Discover a place you&apos;ll love to live</h1>
                    <p>Pellentesque egestas elementum egestas faucibus sem. Velit nunc
                        egestas ut morbi. Leo diam diam</p>
                    <Link to='/residential'>
                        <button className="btn bg-[#FFD223] px-8 rounded-3xl my-20 opacity-70">View Properties</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
