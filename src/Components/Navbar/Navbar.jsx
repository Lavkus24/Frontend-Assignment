import React, { useState } from "react";

import {
	AppBar,
	Toolbar,
	FormControl,
	Select,
	MenuItem,
	Typography,
	Grid
} from "@mui/material";

import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setLabel } from "../Redux/Slice";

const Options = {
	"5" : "Last 5 minutes",
	"30" : "Last 30 minutes",
	"45" : "Last 45 minutes",
	"60" : "Last 1 Hour"
};

const Navbar = () => {
	const dispatch = useDispatch();

	const [hoveredPage, setHoveredPage] = useState(null);
	const [timeFrame, setTimeFrame] = useState(5);

	const handleDropdownChange = event => {
		setTimeFrame(event.target.value);

		dispatch(setLabel(event.target.value));
	};

	return (
		<AppBar position="fixed">
			<Toolbar disableGutters>
				<Grid container>
					<Grid item style={{ marginLeft: "20px" }}>
						<Link
							to={"#"}
							style={{
								color: "white",
								fontWeight: "bold",
								padding: "12px",
								textDecoration: "none",
								...(hoveredPage === "trueFoundry" && { color: "lightgray" })
							}}
							onMouseEnter={() => setHoveredPage("trueFoundry")}
							onMouseLeave={() => setHoveredPage(null)}
						>
							{"trueFoundry"}
						</Link>
						<Link
							to={"/"}
							style={{
								color: "white",
								fontWeight: "bold",
								padding: "12px",
								textDecoration: "none",
								...(hoveredPage === "Metrics" && { color: "lightgray" })
							}}
							onMouseEnter={() => setHoveredPage("Metrics")}
							onMouseLeave={() => setHoveredPage(null)}
						>
							{"Metrics"}
						</Link>
						<Link
							to={"/logs"}
							style={{
								color: "white",
								fontWeight: "bold",
								padding: "12px",
								textDecoration: "none",
								...(hoveredPage === "Logs" && { color: "lightgray" })
							}}
							onMouseEnter={() => setHoveredPage("Logs")}
							onMouseLeave={() => setHoveredPage(null)}
						>
							{"Logs"}
						</Link>
					</Grid>
				</Grid>
				<Grid item style={{ marginRight: "20px" }}>
					<FormControl>
						<Select
							variant="standard"
							disableUnderline={true}
							value={timeFrame}
							onChange={handleDropdownChange}
							style={{
								color: "white",
								fontWeight: "bold",
								textDecoration: "none"
							}}
						>
							{Object.keys(Options).map((key, index) => {
								return (
									<MenuItem key={index} value={key}>
										<Typography variant="body1" style={{ fontWeight: "bold" }}>
											{Options[key]}
										</Typography>
									</MenuItem>
								);
							})}
						</Select>
					</FormControl>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
