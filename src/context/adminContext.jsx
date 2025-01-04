import React, { createContext, useState, useEffect } from "react";
import Cookies from "js-cookie";

export const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		const adminCookie = Cookies.get("isAdmin");
		if (adminCookie === "true") {
			setIsAdmin(true);
		}
	}, []);

	const login = () => {
		setIsAdmin(true);
		Cookies.set("isAdmin", "true", { expires: 7 });
	};

	const logout = () => {
		setIsAdmin(false);
		Cookies.set("isAdmin", "false", { expires: 7 });
	};

	return (
		<AdminContext.Provider value={{ isAdmin, login, logout }}>
			{children}
		</AdminContext.Provider>
	);
};
