export const filterDataSourceByTimeThreshold = (dataSource, timeSetting) => {
	const currentTimestamp = new Date();
	currentTimestamp.setHours(parseInt("08"));
	currentTimestamp.setMinutes(parseInt("50"));

	const filteredData = structuredClone(dataSource);
	const numericTimeThreshold = parseInt(timeSetting);

	filteredData.categories[0].category = filteredData.categories[0].category.filter(category => {
		const label = category.label.split(":");

		const labelTimestamp = new Date();
		labelTimestamp.setHours(parseInt(label[0]));
		labelTimestamp.setMinutes(parseInt(label[1]));

		const timeDifference = (currentTimestamp.getTime() - labelTimestamp.getTime()) / (1000 * 60);
		return timeDifference >= 0 && timeDifference < numericTimeThreshold;
	});

	filteredData.dataset.forEach(series => {
		series.data = series.data.filter((_, index) => {
			const label = dataSource.categories[0].category[index].label;
			const labelParts = label.split(":");

			const labelTimestamp = new Date();
			labelTimestamp.setHours(parseInt(labelParts[0]));
			labelTimestamp.setMinutes(parseInt(labelParts[1]));

			const timeDifference = (currentTimestamp.getTime() - labelTimestamp.getTime()) / (1000 * 60);
			return timeDifference >= 0 && timeDifference < numericTimeThreshold;
		});
	});

	return filteredData;
};

export const extractDateTimeDifference = (dataSource, timeSetting) => {
	const currentDate = new Date("Apr 23 08:50:00.000");
	const numericTimeThreshold = parseInt(timeSetting);

	const filteredLogs = dataSource.logs.filter(log => {
		const [monthName, day, time] = log.timestamp.split(" ");
		const [hours, minutes, seconds] = time.split(":");

		const milliseconds = parseInt(time.split(".")[1]);
		const desiredYear = parseInt(currentDate.getFullYear());
		const adjustedDate = new Date(`${monthName} ${day} ${desiredYear} ${hours}:${minutes}:${seconds}.${milliseconds}`);
		const timeDifference = (currentDate.getTime() - adjustedDate.getTime()) / (1000 * 60);

		return timeDifference >= 0 && timeDifference < numericTimeThreshold;
	});

	return { logs: filteredLogs };
};
