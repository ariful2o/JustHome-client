import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";
import '../pages/Programs.css'
import auth from "../firebase/firebase.init";

export default function Navbar() {
    const { user, signout } = useContext(AuthContext);
    const [theme, setTheme] = useState('light');
    const [name,setName]=useState('')
    const [url,setUrl]=useState('')

    const handleThemes = (e) => {
        if (e.target.checked) {
            setTheme('synthwave');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', theme);
    }, [theme]);

    const navlinks = <>
        <NavLink exact to='/' activeClassName="active" >Home</NavLink>
        <NavLink to='/features' activeClassName="active" >Features</NavLink>
        <NavLink to='/about' activeClassName="active" >About</NavLink>
        <NavLink to='/programs' activeClassName="active" >Programs</NavLink>
        <NavLink to='/newsEvents' activeClassName="active" >News & Events</NavLink>
        {user &&
            <NavLink to='/scholarships' activeClassName="active" className="nav-link">Scholarships</NavLink>
        }
    </>



useEffect(()=>{
    const userr = auth.currentUser;
    if (userr !== null) {
        user.providerData.forEach((profile) => {
            // console.log("Sign-in provider: " + profile.providerId);
            // console.log("  Provider-specific UID: " + profile.uid);
            // console.log("  Name: " + profile.displayName);
            // console.log("  Email: " + profile.email);
            console.log("  Photo URL: " + profile.photoURL);
            
            
            if(profile.displayName){
                const initials = profile.displayName
            .split(" ") // Split the string into an array of words
            .map(word => word.charAt(0).toUpperCase())
            .join(""); 
            profile.photoURL?setUrl(profile.photoURL):setName(initials)
            }
            
            
        });
    }

},[user])

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 uppercase font-bold">
                        {navlinks}
                    </ul>
                </div>
                <div className="relative hidden lg:flex">
                    <div className="flex flex-row">
                        <img className="w-14 lg:w-20" src="https://lighthouse.ancorathemes.com/wp-content/uploads/2017/06/lighthouse.png" alt="" />
                        <a className="btn btn-ghost text-xl">Light House</a>
                    </div>
                    <span className="absolute italic bottom-1 left-20 text-[#ddbc3ace] btn btn-ghost text-xl">SCHOOL</span>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold uppercase gap-5 items-center">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label className="cursor-pointer grid place-items-center">
                    <input onChange={handleThemes} name="theme" type="checkbox" value="synthwave" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {user &&
                    <NavLink to='/profile' className="avatar  placeholder ml-4 relative ">
                        <div className="bg-neutral text-neutral-content rounded-full w-12 opacity-70 ">
                            {
                                url?<img src={url} alt="" />:<span className="text-xl">{name}</span>
                            }
                        </div>
                        <span className="absolute top-0 left-9 flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                        </span>
                    </NavLink>
                }
                <a className="btn mx-4 bg-[#FFD122] hidden lg:flex">DONATE</a>
                {user ? <a onClick={signout} className="btn mx-4 bg-neutral-content opacity-90">LOGOUT</a> : <Link to='/login' className="btn">LOGIN</Link>}
            </div>
        </div>
    );
}
