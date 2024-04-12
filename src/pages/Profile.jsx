import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.init";


export default function Profile() {


    updateProfile(auth.currentUser, {
        displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    }).then(() => {
        // Profile updated!
        // ...
    }).catch((error) => {
        // An error occurred
        // ...
    });


    return (
        <div>
            <form className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="file" placeholder="Photo URL" className="input-bordered  file-input file-input-ghost w-full" />
                </div>
            </form>
        </div>
    )
}
