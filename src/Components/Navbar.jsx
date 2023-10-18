import { NavLink } from "react-router-dom"


function Navbar() {
    const navLinks = < >
        <li><NavLink to="/" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white bg-black" : ""}>Home</NavLink></li>
        <li><NavLink to="/addProduct" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white bg-black" : ""}>Add Product</NavLink></li>
        <li><NavLink to="/myCart" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white bg-black" : ""}>My Cart</NavLink></li>
        <li><NavLink to="/login" className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "text-white bg-black" : ""}>Login
        </NavLink></li>
    </>
    return (
        <div className="mb-20 relative z-40">
            <div className="navbar container mx-auto backdrop-blur-md bg-white/30 text-black fixed top-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost md:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className="hidden md:block h-20" src="https://i.ibb.co/x6td5rt/Screenshot-2023-10-18-160347.png" alt="" />
                </div>
                <div className="navbar-end hidden md:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <img className=" h-20 md:hidden navbar-end" src="https://i.ibb.co/x6td5rt/Screenshot-2023-10-18-160347.png" alt="" />

            </div>
        </div>
    )
}

export default Navbar
