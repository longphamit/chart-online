import { configureStore } from '@reduxjs/toolkit'
import chart from "@/lib/chartSlice";
import formCreateChart from "@/lib/formCreateChartSlice";

const rootReducer = {
    chart,
    formCreateChart
};
export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}