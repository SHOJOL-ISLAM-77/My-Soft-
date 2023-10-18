import { NavLink } from "react-router-dom"


function Navbar() {
    const nanlinks = < >
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
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {nanlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {nanlinks}
                </ul>
            </div>
        </div>
        </div>
    )
}

export default Navbar
