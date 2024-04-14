
import auth from "../firebase/firebase.init";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


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
        <>

            <img className="rounded-full w-80 h-80 mx-auto" src={url} alt="image description" />

                <h2 className="text-2xl text-center">{name}</h2>
                <p className="text-center">{email}</p>
            </>
            )
}

