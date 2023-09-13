import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../../features/categories/categoriesSlice";

import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import AppRoutes from "./routes/Routes";

const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCategories())
	})

	return (
		<div className="app">
			<Header />

			<div className="container">
				<Sidebar />
				<AppRoutes />
			</div>

			<Footer />
		</div>
	)
};

export default App;