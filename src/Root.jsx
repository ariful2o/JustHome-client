import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './pages/Footer'
export default function Root() {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer/>
        </div>
    )
}
