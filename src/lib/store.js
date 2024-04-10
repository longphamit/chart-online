import { configureStore } from '@reduxjs/toolkit'
import chart from "./chartSlice";
import formCreateChart from "./formCreateChartSlice";

const rootReducer = {
    chart,
    formCreateChart
};
export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}