import { updateProfile } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../firebase/firebase.init';

export default function UpdateProfile() {

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')

        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo,
        }).then(() => {
            toast('Profile updated!')
        }).catch((err) => {
            toast.error(err.message)
        });
    }
    return (
        <div className="max-h-svh  ">
            <ToastContainer />
            <div className="card shrink-0 w-full max-w-2xl shadow-2xl bg-base-100   top-20 left-1/4">
                <h1 className="text-center text-5xl font-bold pt-8">Update your account</h1>

                <form className="card-body" onSubmit={handleUpdate}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Name" className="input input-bordered" required />
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered" required />

                    </div>

                    <div className="form-control mt-6">
                        <button className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Update</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
