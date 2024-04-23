
import { configureStore } from "@reduxjs/toolkit";
import labelSlice from "./Slice";

const Store = configureStore({
	reducer : {
		label : labelSlice
	}
});

export default Store;
