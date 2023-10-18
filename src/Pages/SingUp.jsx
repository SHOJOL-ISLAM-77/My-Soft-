

function SingUp() {

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded shadow-2xl border-2 py-10 my-32">
            <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
            <form >
                <div className="mb-4">
                    <label htmlFor="username" className="block text-gray-700 text-sm font-bold mb-2">
                        Username:
                    </label>
                    <input
                        type="text"
                        name="username"
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

                <div className="mb-4">
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
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Sign Up
                </button>

                <button className="flex items-center gap-3 " >
                    <img src="/icons/google.svg" alt="metamask" className="h-6 w-6" />
                    Continue with Google
                </button>
            </form>
        </div>
    )
}

export default SingUp
