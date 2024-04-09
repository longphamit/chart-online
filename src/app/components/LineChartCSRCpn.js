'use client'
import {
    Center, Grid,
    GridItem
} from "@chakra-ui/react";
import {Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import DowLoadChart from "@/app/components/DowLoadChart";
import {useDispatch, useSelector} from "react-redux";
import {chartAction, chartPlugins, COLOR_BORDER} from "@/lib/chartSlice";
import FormCreateChart from "@/app/components/FormCreateChart";
import {useEffect, useState} from "react";


const LineChartCSRCpn = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const dispatch = useDispatch();
    const chartState = useSelector(state => state.chart)
    useEffect(() => {
        dispatch(chartAction.setOneColorBackground())
    }, []);
    return (
        <>
            <Grid
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
            >
                <GridItem rowSpan={2} colSpan={3}>
                    <DowLoadChart/>
                    <Center style={{padding: 20}}>
                        <Line id="chart"
                              style={{background: "#ffff"}}
                              options={chartState.options}
                              data={chartState}
                              plugins={chartPlugins}

                        />
                    </Center>
                </GridItem>
                <GridItem rowSpan={2} colSpan={2}>
                    <FormCreateChart baseBorderColor={true} showOneColor={true}/>
                </GridItem>
            </Grid>


        </>
    );
}
export default LineChartCSRCpn