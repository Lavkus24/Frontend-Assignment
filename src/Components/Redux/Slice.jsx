import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	label : "5"
};

export const labelSlice = createSlice({
	name: "label",
	initialState,
	reducers: {
		setLabel: (state, action) => {
			state.label = action.payload;
		}
	}
});

export const { setLabel } = labelSlice.actions;
export default labelSlice.reducer;
