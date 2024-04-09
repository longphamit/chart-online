import {createSlice} from "@reduxjs/toolkit";
import {chartDefaultData, chartSlice} from "@/lib/chartSlice";

const initialState = {
    nameOfChart: "",
    nameOfValue: "",
    data: chartDefaultData
}
export const formCreateChartSlice = createSlice({
    name: "formCreateChart",
    initialState,
    reducers: {
        setNameOfChart: (state, action) => {
            state.nameOfChart = action.payload.value
        },
        setNameOfValue: (state, action) => {
            state.nameOfValue = action.payload.value
        },
        addValue: (state, action) => {
            state.data = [...state.data, {x: "", y: ""}]
        },
        removeValue: (state, action) => {
            let array = [...state.data];
            array.splice(action.payload.index, 1)
            state.data = array;
        },
        handleValue: (state, action) => {
            const {index, type, value} = action.payload
            if (index >= 0 && index < state.data.length) {
                if (type === 'x') {
                    state.data = [
                        ...state.data.slice(0, index),
                        {...state.data[index], x: value},
                        ...state.data.slice(index + 1),
                    ];
                } else if (type === 'y') {
                    state.data = [
                        ...state.data.slice(0, index),
                        {...state.data[index], y: value},
                        ...state.data.slice(index + 1),
                    ]
                } else if (type === 'color') {
                    state.data = [
                        ...state.data.slice(0, index),
                        {...state.data[index], color: value},
                        ...state.data.slice(index + 1),
                    ]
                }
            }
        }
    },
});

const {reducer, actions} = formCreateChartSlice;
export const formCreateChartAction = actions;
export default reducer;