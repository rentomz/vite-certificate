import { useState } from "react";

const LoginPage = ({ handleLogin, loginError }) => {
	const [username, setUsername] = useState(""); 
	const [password, setPassword] = useState(""); 

	return (
		<div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md mt-8 mb-6">
			<h2 className="text-2xl font-semibold mb-4">Login</h2>
			<form
				onSubmit={(e) => handleLogin(e, username, password)}
				className="space-y-4"
			>
				<input
					type="text"
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)} 
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)} 
					className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
				/>
				{loginError && (
					<p className="text-red-500 text-sm">Invalid username or password</p>
				)}
				<button
					type="submit"
					className="w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
				>
					Login
				</button>
			</form>
		</div>
	);
};

export default LoginPage;
