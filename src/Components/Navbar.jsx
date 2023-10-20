import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import { FaAlignJustify, FaTimes } from "react-icons/fa";


function Navbar() {
    const { user, logOut } = useContext(AuthContext);
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");
    const userName = user?.displayName;
    const photo = user?.photoURL;
    const name = user?.displayName;
    const [show, setShow] = useState(false);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
    }
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme])

    const handleSingOut = () => {
        logOut()
            .then()
            .catch()
    }

    return (
        <div className="mb-20 relative z-40 ">
            <div className={`backdrop-blur-md container mx-auto rounded-b-xl  fixed top-0 ${theme === 'light' ? 'bg-black/20' : 'bg-white/20'}`}>
                <div className="lg:py-3 lg:h-auto  px-5 relative container mx-auto ">
                    <nav className="flex justify-between items-center gap-16">
                        <img className="max-w-[150px] md:max-w-[200px] lg:inline-block hidden" src="https://i.ibb.co/x6td5rt/Screenshot-2023-10-18-160347.png" alt="this is Icon" />

                        <div className="list-none lg:flex gap-6 xl:gap-12 text-lg hidden items-center">
                            <li>
                                <label className="swap swap-rotate">
                                    <input type="checkbox" onChange={handleToggle} />

                                    <svg className="swap-on fill-current w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                    </svg>
                                    <svg className="swap-off fill-current w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                    </svg>
                                </label>
                            </li>
                            <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline text-base" : "text-base"}> Home</NavLink></li>
                            <li><NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline text-base" : "text-base"}>Add Product</NavLink></li>
                            <li><NavLink to={`/cartData/${userName}`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline text-base" : "text-base"}>My Cart</NavLink></li>

                            {
                                user ? <li className="flex items-center gap-5"><p>{name}</p> <img src={photo} className="inline h-10 w-10 rounded-full" alt="" /> <button onClick={handleSingOut} className=" lg:inline btn btn-outline">Log Out</button> </li>
                                    : <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black underline text-base" : "text-base"}> Login</NavLink></li>
                            }
                        </div>
                    </nav>
                    <div className={`py-5 absolute top-0 right-0 flex items-center gap-5 justify-around container lg:hidden ${theme === 'light' ? 'bg-black/40' : 'bg-white/40'}`} onClick={() => setShow(!show)}>
                        <img className="max-w-[150px]" src="https://i.ibb.co/x6td5rt/Screenshot-2023-10-18-160347.png" alt="this is Icon" />
                        <li className="list-none">
                            <label className="swap swap-rotate">
                                <input type="checkbox" onChange={handleToggle} />

                                <svg className="swap-on fill-current w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>
                                <svg className="swap-off fill-current w-10 h-10 text-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
                        </li>
                        <div className="flex items-center justify-between  gap-4">

                            {
                                user && <div className="flex items-center gap-5"><img className="h-10 w-10 rounded-full" src={photo} alt="" /></div>
                            }
                            {
                                show ? <FaTimes className="text-center text-2xl cursor-pointer" /> : <FaAlignJustify className="text-center text-2xl cursor-pointer" />
                            }

                        </div>

                    </div>
                    <div className="list-none text-base lg:hidden ">
                        <div className={`list-none text-black text-right sm:pr-10 duration-1000 ${show === false ? '-mt-[450px] ' : "mt-20 "}`}>

                            <li className=" text-right px-10 py-3 m-2 "><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black-600 underline" : ""}> Home</NavLink></li>
                            <li className=" text-right px-10 py-3 m-2 "><NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black-600 underline" : ""}>Add Product</NavLink></li>
                            <li className=" text-right px-10 py-3 m-2 "><NavLink to={`/cartData/${userName}`} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black-600 underline" : ""}>My Cart</NavLink></li>
                            {

                                user ? <li onClick={handleSingOut} className=" text-right px-10 py-3 m-2 "><Link to='/'>Log Out</Link></li>
                                    : <li className=" text-right px-10 py-3 m-2 "><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-black-600 underline" : ""}> Login</NavLink></li>
                            }
                            <li className="text-right px-10 py-3 m-2"><p className="sm:text-xl text-base">{name}</p> </li>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Navbar
