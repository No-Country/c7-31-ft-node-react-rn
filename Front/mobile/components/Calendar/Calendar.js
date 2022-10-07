import React, { useState } from "react";

import DatePicker from "@react-native-community/datetimepicker";

export const Calendar = ({ setBirthDate, setShowCalendar }) => {
	return (
		<DatePicker
			value={new Date()}
			style={{ width: 200, marginTop: 20 }}
			date='09-10-2003' // Initial date from state
			mode='date' // The enum of date, datetime and time
			format='DD-MM-YYYY'
			minDate='01-01-1900'
			maxDate={new Date()}
			confirmBtnText='Confirm'
			cancelBtnText='Cancel'
			onChange={(e) => {
				setShowCalendar(false);
				setBirthDate(e.nativeEvent.timestamp);
			}}
		/>
	);
};
