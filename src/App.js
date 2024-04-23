import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route
} from "react-router-dom";

import { Provider } from "react-redux";
import store from "../src/Components/Redux/Store";

import Navbar from "./Components/Navbar";
import Logs from "./Components/Logs";
import Metrics from "./Components/Metrics";

const App = () => {
	return (
		<Provider store={store}>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Metrics />} />
					<Route path="/logs" element={<Logs />} />
				</Routes>
			</Router>
		</Provider>
	);
};

export default App;
