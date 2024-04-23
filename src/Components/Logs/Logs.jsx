import React from "react";

import {
	Grid,
	Typography
} from "@mui/material";

import {
	dataSource5
} from "../DataSources/DataSources";

import { extractDateTimeDifference } from "../../Utils/FilterDatasource";

import { useSelector } from "react-redux";

const Logs = () => {
	const { label } = useSelector((state) => state.label);
	const data = extractDateTimeDifference(dataSource5 , label);

	const getLogColor = level => {
		switch (level) {
		case "success":
			return "green";
		case "error":
			return "red";
		default:
			return "#6699ff";
		}
	};

	return (
		<Grid
			style={{
				margin: "20px",
				marginTop: "85px",
				overflowY: "auto",
				height: "89vh",
				backgroundColor: "#010115"
			}}>
			{data && data.logs.map((log, index) => (
				<Typography key={index} style={{ margin: "8px", fontFamily: "monospace" }}>
					<span style={{ color: getLogColor(log.level), marginRight: "10px" }}>
						{"|"}
					</span>
					<span style={{ color: "#6699ff", marginRight: "20px" }}>
						{log.timestamp}
					</span>
					<span style={{ color: getLogColor(log.level), marginRight: "20px" }}>
						{"["}{log.level}{"]"}
					</span>
					<span style={{ color: "#99bbff" }}>
						{log.message}
					</span>
				</Typography>
			))}
		</Grid>
	);
};

export default Logs;
