import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { createContext, useEffect, useState } from "react"
import auth from "../firebase/firebase.init"
import { PropTypes } from "prop-types"

export const AuthContext = createContext(null)
export default function AuthProvider({ children }) {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const googleProvider = new GoogleAuthProvider()
  const GithubProvider = new GithubAuthProvider()

  const registerUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }

  const loginUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const signout = () => {
    setLoading(true)
    return signOut(auth)
  }

  const forgetPassword = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email)
  }

  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const loginWithgithub = () => {
    setLoading(true)
    return signInWithPopup(auth, GithubProvider)
  }


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
      console.log('>----------->', currentUser)
    })
    return () => unSubscribe()
  }, [user])


  const AuthInfo = {//auth informations
    user,
    registerUser,
    loginUser,
    signout,
    forgetPassword,
    loginWithGoogle,
    loginWithgithub,
    loading
  }
  return (
    <AuthContext.Provider value={AuthInfo}>
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};