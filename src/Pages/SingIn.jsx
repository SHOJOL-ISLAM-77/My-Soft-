import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


function SingIn() {
    const [show, setShow] = useState(false)
    const [loginError, setLoginError] = useState('');
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setLoginError('');

        login(email, password)
            .then(result => {
                console.log(result);
                Swal.fire(
                    'Good job!',
                    'Login!',
                    'success'
                )
                navigate(location?.state ? location.state : "/")
                return;
            })
            .catch(
                setLoginError('Do not match email or password')
            )

    }

    return (

        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md my-48 border">
            <h1 className="text-2xl font-bold mb-6">Sign In</h1>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="email"
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>
                <div className="mb-4 relative">
                    <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                        Password:
                    </label>
                    <input
                        type={show ? "text" : "password"}
                        name="password"
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                    <span onClick={() => setShow(!show)} className="absolute right-5 top-[40px] cursor-pointer">{show ? <FaEyeSlash /> : <FaEye />}</span>
                </div>

                {
                    loginError && <p className="text-red-700 pt-4">{loginError}</p>
                }
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Sign In
                </button>
                <p className="text-blue-700">Do not have account <Link to="/singUp" className="hover:underline hover:font-bold">Please Sing Up</Link></p>
            </form>
        </div>
    )
}

export default SingIn
