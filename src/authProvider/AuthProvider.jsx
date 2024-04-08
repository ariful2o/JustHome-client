import { createContext } from "react"

export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {

const authData={
    name:'ariful'
}
    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    )
}
