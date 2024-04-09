import { useContext } from "react"
import { AuthContext } from "../authProvider/AuthProvider"
import { useNavigate } from "react-router-dom";


export default function PrivateRoute({children}) {
    const {user} =useContext(AuthContext)
    const navigate = useNavigate();

    if (!user) {
        navigate('/login')
        return
    }
  return (
  children
  )
}
