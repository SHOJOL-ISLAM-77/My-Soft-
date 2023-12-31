import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"
import { AuthContext } from "../Provider/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";


function SingUp() {
    const [show, setShow] = useState(false)
    const [singUpError, setSingUpError] = useState('');
    const { createUserWithEmail, uploadProfile, googlePopUp, githubPopUp } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate()

    const handleSingUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        setSingUpError('');


        const passwordTest = /^(?=.*[A-Z])(?=.*[\W_]).*[A-Za-z0-9].*$/;
        if (password.length < 6) {
            setSingUpError(' Password should be at least 6 characters')
            return;
        } else if (!passwordTest.test(password)) {
            setSingUpError('Your password should have at least one upper case characters, a special character .');
            return;
        }
        createUserWithEmail(email, password)
            .then(result => {
                console.log(result);

                uploadProfile(name, photo)
                    .then(result => {
                        console.log(result.user);
                    })
                    .catch(error => {
                        setSingUpError(error.message);
                    })
                Swal.fire(
                    'Good job!',
                    'Thanks for Sing Up!',
                    'success'
                )
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }

    const handleGoogleSingUp = () => {
        googlePopUp()
            .then(result => {
                console.log(result);
            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }
    const handleGithubSingUp = () => {
        githubPopUp()
            .then(

        )
            .catch(error => {
                setSingUpError(error.message)
            })
    }

    return (
        <div className="max-w-md p-6 bg-base-300 rounded shadow-2xl border-2 py-10 my-32 mx-auto m-5">
            <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
            <form onSubmit={handleSingUp}>
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="name"
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Photo URL:
                    </label>
                    <input
                        type="text"
                        name="photo"
                        className="w-full border border-gray-300 p-2 rounded"
                        required
                    />
                </div>

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
                    singUpError && <p className="text-red-700 pb-4">{singUpError}</p>
                }

                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 w-full">
                    Sign Up
                </button>
                <p className="text-blue-700 mb-4">Have account <Link to="/login" className="hover:underline hover:font-bold">Please Sing In</Link></p>

            </form>
            <div className="flex justify-between">
                <button onClick={handleGoogleSingUp} className="flex items-center gap-3  text-green-600 border border-yellow-500 font-bold py-2 px-4 rounded" >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 40 40">
                        <path fill="#8bb7f0" d="M28.229,29.396c1.528-1.345,2.711-3.051,3.438-4.968c0.187-0.491,0.321-0.905,0.423-1.303 l0.16-0.625H20.5v-6h17.662c0.225,1.167,0.338,2.343,0.338,3.5c0,5.005-2.069,9.834-5.692,13.32L28.229,29.396z"></path><path fill="#4e7ab5" d="M37.744,17C37.914,18.002,38,19.008,38,20c0,4.719-1.891,9.277-5.216,12.641l-3.802-3.259 c1.385-1.333,2.465-2.964,3.153-4.777c0.192-0.506,0.332-0.937,0.44-1.355L32.897,22h-1.291H21v-5H37.744 M38.57,16H20v7h11.607 c-0.11,0.428-0.252,0.842-0.406,1.25c-0.772,2.034-2.073,3.808-3.744,5.141l5.367,4.6C36.611,30.518,39,25.544,39,20 C39,18.627,38.847,17.291,38.57,16L38.57,16z"></path><path fill="#8bb7f0" d="M32.828,22c-0.501,3.231-2.175,6.075-4.594,8.058l3.825,3.278c3.175-2.873,5.329-6.852,5.828-11.336 H32.828z"></path><path fill="#bae0bd" d="M20,38.5c-6.903,0-13.128-3.773-16.349-9.877l4.957-3.499C10.625,29.626,15.031,32.5,20,32.5 c2.713,0,5.277-0.851,7.439-2.465l4.624,3.963C28.695,36.906,24.434,38.5,20,38.5z"></path><path fill="#5e9c76" d="M8.411,25.875C10.612,30.242,15.035,33,20,33c2.688,0,5.234-0.803,7.413-2.329l3.876,3.322 C28.086,36.585,24.12,38,20,38c-6.57,0-12.509-3.513-15.697-9.225L8.411,25.875 M8.828,24.357l-5.82,4.108 C6.123,34.704,12.552,39,20,39c4.949,0,9.442-1.908,12.823-5.009l-5.367-4.6C25.411,31.023,22.822,32,20,32 C14.911,32,10.573,28.827,8.828,24.357L8.828,24.357z"></path><path fill="#bae0bd" d="M28.234,30.058C25.992,31.896,23.125,33,20,33c-5.407,0-10.041-3.303-12-8l-4.13,2.95 C6.807,33.899,12.917,38,20,38c4.645,0,8.866-1.775,12.059-4.664L28.234,30.058z"></path><path fill="#f78f8f" d="M3.891,10.907C7.177,5.094,13.31,1.5,20,1.5c4.493,0,8.8,1.632,12.186,4.607l-4.212,4.212 C25.757,8.498,22.944,7.5,20,7.5c-4.84,0-9.196,2.763-11.271,7.093L3.891,10.907z"></path><path fill="#c74343" d="M20,2c4.193,0,8.22,1.462,11.449,4.136l-3.515,3.515C25.688,7.935,22.905,7,20,7 c-4.828,0-9.192,2.643-11.445,6.832l-4.01-3.055C7.791,5.342,13.637,2,20,2 M20,1C12.746,1,6.446,5.068,3.245,11.044l5.682,4.329 C10.738,11.043,15.013,8,20,8c3.059,0,5.881,1.116,8,3l4.911-4.911C29.52,2.94,24.992,1,20,1L20,1z"></path><g><path fill="#f78f8f" d="M20,7V2C13.07,2,7.064,5.922,4.056,11.662l4.056,3.09C10.13,10.189,14.689,7,20,7z"></path></g><g><path fill="#ffeea3" d="M3.235,27.789C2.083,25.324,1.5,22.707,1.5,20c0-2.838,0.661-5.66,1.917-8.197l4.905,3.737 C7.776,16.965,7.5,18.463,7.5,20c0,1.435,0.249,2.851,0.74,4.214L3.235,27.789z"></path><path fill="#ba9b48" d="M3.604,12.574l4.121,3.14C7.244,17.09,7,18.528,7,20c0,1.367,0.217,2.717,0.646,4.024l-4.204,3.003 C2.484,24.791,2,22.432,2,20C2,17.441,2.552,14.897,3.604,12.574 M3.245,11.044C1.815,13.713,1,16.76,1,20 c0,3.075,0.747,5.97,2.044,8.54l5.799-4.142C8.305,23.035,8,21.554,8,20c0-1.64,0.331-3.203,0.927-4.627L3.245,11.044L3.245,11.044 z"></path></g><g><path fill="#ffeea3" d="M7,20c0-1.869,0.402-3.642,1.112-5.248l-4.056-3.09C2.749,14.156,2,16.989,2,20 c0,2.858,0.684,5.55,1.869,7.951L8,25C7.357,23.461,7,21.772,7,20z"></path></g>
                    </svg> With Google
                </button>
                <button onClick={handleGithubSingUp} className="flex items-center gap-3  text-green-600 border border-yellow-500 font-bold py-2 px-4 rounded" >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 50 50">
                        <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
                    </svg>With github
                </button>
            </div>

        </div>
    )
}

export default SingUp
