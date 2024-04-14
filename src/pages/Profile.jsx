
import auth from "../firebase/firebase.init";
import { useContext, useEffect } from "react";
import { AuthContext } from "../authProvider/AuthProvider";


export default function Profile() {
    const {user}=useContext(AuthContext)

    useEffect(()=>{
        const userr = auth.currentUser;
        if (userr !== null) {
            user.providerData.forEach((profile) => {
                console.log("Sign-in provider: " + profile.providerId);
                console.log("  Provider-specific UID: " + profile.uid);
                console.log("  Name: " + profile.displayName);
                console.log("  Email: " + profile.email);
                console.log("  Photo URL: " + profile.photoURL);
                
                
               
                
                
            });
        }
    
    },[user])


    


    return (
        <div className="max-h-svh  ">
                <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100   top-20 left-1/4">
                    <h1 className="text-center text-5xl font-bold pt-8">Update Profile</h1>

                    <form className="card-body" >
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input name="photo" type="file" placeholder="Photo URL" className="input-bordered  file-input file-input-ghost w-full" />
                            {/* <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required /> */}
                        </div>
                        
                        <div className="form-control mt-6">
                            <button className="btn btn-primary opacity-70">Update</button>
                        </div>
                       
                    </form>
                </div>
            </div>
    )
}
