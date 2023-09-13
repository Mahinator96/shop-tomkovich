import React from "react";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

import AppRoutes from "./routes/Routes";

const App = () => {
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