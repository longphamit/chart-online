import {createSlice} from "@reduxjs/toolkit";


export const COLOR_BACKGROUND = 'rgba(255, 99, 132)';
export const COLOR_BORDER = '#ffff'
export const chartPlugins =
    {
        beforeDraw: (chart, args, options) => {
            const {ctx} = chart;
            ctx.save();
            ctx.globalCompositeOperation = 'destination-over';
            ctx.fillStyle = options.color || '#ffff';
            ctx.fillRect(0, 0, chart.width, chart.height);
            ctx.restore();
        }
    }

export const chartDefaultData = [{x: "Monday", y: 1, color: "red"}, {x: "Tuesday", y: 5, color: "green"}, {
    x: "Wednesday",
    y: 3,
    color: "blue"
}];
const initialState = {
    labels: chartDefaultData.map(e => e.x),
    datasets: [{
        label: 'Name of value',
        data: chartDefaultData.map(e => e.y),
        backgroundColor: chartDefaultData.map(e => e.color),
        borderColor: COLOR_BACKGROUND,

    }],
    options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
            padding: 30
        },
        plugins: {
            legend: {
                position: 'top',
                labels:{
                    color: "black"
                }
            },
            title: {
                display: true,
                text: "Name of chart",
                color: "black"
            },
            chartPlugins,
            datalabels: {
                backgroundColor: function (context) {
                    return context.dataset.backgroundColor;
                },
                borderRadius: 4,
                color: 'white',
                font: {
                    weight: 'bold',
                },
                formatter: (value, context) => {
                    const isPieChart = context.chart.config.type === 'pie' || context.chart.config.type === 'doughnut';
                    if (isPieChart) {
                        let percentage = (value / context.dataset.data.reduce((a, b) => a + b, 0)) * 100;
                        return `${percentage.toFixed(1)}%`;
                    } else {
                        // For LineChart:
                        return value;
                    }
                },
            },
        },

    }
}

export const chartSlice = createSlice({
    name: "chart",
    initialState,
    reducers: {
        createChart: (state, action) => {
            console.log(action.payload.datasets)
            state.labels = action.payload.labels;
            state.datasets = action.payload.datasets
            state.options = { // Update options state with new title
                ...state.options,
                plugins: {
                    ...state.options.plugins,
                    title: {
                        ...state.options.plugins.title,
                        text: action.payload.nameOfChart,
                    },
                }

            }
        },
        setOneColorBackground: (state, action) => {
            state.datasets.forEach(e => e.backgroundColor = COLOR_BACKGROUND)
        },
        setBorderColor: (state, action) => {
            state.datasets.forEach(e => e.borderColor = COLOR_BORDER)
        },
        setNameOfChart:(state,action)=>{
            state.options = { // Update options state with new title
                ...state.options,
                plugins: {
                    ...state.options.plugins,
                    title: {
                        ...state.options.plugins.title,
                        text: action.payload.value,
                    },
                }

            }
        },
        setNameOfValue:(state,action)=>{
            state.datasets.forEach(e => e.label = action.payload.value)
        }
    }
});

const {reducer, actions} = chartSlice;
export const chartAction = actions;
export default reducer;