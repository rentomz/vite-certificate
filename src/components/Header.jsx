import { Link } from "react-router";
import { useContext } from "react";
import { AdminContext } from "../context/adminContext";

const Header = () => {
	const { isAdmin, logout } = useContext(AdminContext);

	return (
		<header className="bg-blue-500 text-white p-4">
			<nav className="flex justify-between">
				<Link to="/" className="text-lg font-semibold hover:text-gray-200">
					Home
				</Link>
				{isAdmin ? (
					<button
						onClick={logout}
						className="text-lg font-semibold hover:text-gray-200"
					>
						Logout
					</button>
				) : (
					<Link
						to="/admin"
						className="text-lg font-semibold hover:text-gray-200"
					>
						Admin
					</Link>
				)}
			</nav>
		</header>
	);
};

export default Header;
