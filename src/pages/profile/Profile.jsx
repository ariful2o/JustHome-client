
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authProvider/AuthProvider";
import auth from "../../firebase/firebase.init";


export default function Profile() {
    const { user } = useContext(AuthContext)
    const [url, setUrl] = useState(null)
    const [email, setEmail] = useState(null)
    const [name, setName] = useState(null)

    useEffect(() => {
        const userr = auth.currentUser;
        if (userr !== null) {
            user.providerData.forEach((profile) => {
                setUrl(profile.photoURL)
                setEmail(profile.email)
                setName(profile.displayName)

            });
        }

    }, [user])
    return (
        <div className="card w-96 mx-auto bg-base-100 shadow-xl my-20">
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <figure className="px-10 pt-10">
                <div className="avatar">
                    <div className="w-24 my-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={url} />
                    </div>
                </div>
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">Name : {name}</h2>
                <p>Email : {email ? email :"Not Found"}</p>
                <div className="card-actions">
                    <Link to='/updateprofile'>
                        <button className="btn btn-outline btn-primary">Update Profile</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

