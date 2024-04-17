import { Link } from "react-router-dom"
import { PropTypes } from "prop-types"

export default function ComminBanner({ location }) {
  return (
    <div className="hero max-h-60" style={{ backgroundImage: 'url(https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/how1-370x233.jpg)' }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md my-16">
          <h1 className="mb-5 text-4xl font-bold font-sotify uppercase text-white  animate__animated animate__backInDown animate__faster">{location}</h1>
          <div className="flex gap-8 text-lg justify-center animate__animated animate__backInDown animate__fast">
            <Link to='/'>Home</Link>
            <Link to='' className="text-[#FFD223] italic">{location}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
ComminBanner.propTypes = {
  location: PropTypes.string.isRequired,
}