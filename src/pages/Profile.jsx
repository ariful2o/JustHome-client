
import auth from "../firebase/firebase.init";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Link } from "react-router-dom";


export default function Profile() {
    const { user } = useContext(AuthContext)
    const [url, setUrl] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)
    const [emailVerified, setEmailVerified] = useState(null)

    useEffect(() => {
        const userr = auth.currentUser;
        if (userr !== null) {
            user.providerData.forEach((profile) => {
                setUrl(profile.photoURL)
                setEmail(profile.email)
                setName(profile.displayName)
                setEmailVerified(user.emailVerified);

            });
        }

    }, [user])





    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl my-20">
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 my-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={url} />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name : {name}</h2>
                <p>Email : {email}</p>
                <p>Email Verified : {emailVerified}</p>
                <div className="card-actions">
                    <Link to='/updateprofile'>
                        <button className="btn btn-outline btn-primary">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

