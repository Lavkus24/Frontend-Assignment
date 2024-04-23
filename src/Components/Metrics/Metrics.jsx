import React from "react";
import charts from "fusioncharts/fusioncharts.charts";

import FusionCharts from "fusioncharts";
import ReactFusioncharts from "react-fusioncharts";

import {
	Grid
} from "@mui/material";

import {
	dataSource1,
	dataSource2,
	dataSource3,
	dataSource4
} from "../DataSources/DataSources";

import { filterDataSourceByTimeThreshold } from "../../Utils/FilterDatasource";

import { useSelector } from "react-redux";

charts(FusionCharts);

const Metrics = () => {
	const { label } = useSelector((state) => state.label);

	const Maps = {
		"CPU Usage": filterDataSourceByTimeThreshold(dataSource1, label),
		"Memory Usage": filterDataSourceByTimeThreshold(dataSource2, label),
		"Network Usage": filterDataSourceByTimeThreshold(dataSource3, label),
		"Disk IOPS": filterDataSourceByTimeThreshold(dataSource4, label)
	};

	return (
		<Grid container style={{ paddingTop: "70px" }}>
			{Object.keys(Maps).map((key, index) => {
				return (
					<Grid item xs={6} key={index} style={{ padding: "20px", display: "grid", height: "500px" }}>
						<ReactFusioncharts
							type="msline"
							width="100%"
							height="100%"
							dataFormat="JSON"
							dataSource={{ ...Maps[key],
								chart: { ...Maps[key].chart,
									caption: key,
									captionFont: "monospace",
									captionFontSize: "16",
									captionFontBold: "1"
								}
							}}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
};

export default Metrics;
