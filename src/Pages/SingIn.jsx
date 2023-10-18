import { Link } from "react-router-dom"


function SingIn() {

    return (
        
            <div className="max-w-md mx-auto p-6 bg-white rounded shadow-md my-48 border">
                <h1 className="text-2xl font-bold mb-6">Sign In</h1>
                <form >
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

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            name="password"
                            className="w-full border border-gray-300 p-2 rounded"
                            required
                        />
                    </div>

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
