'use client'
import {
    Center, Grid,
    GridItem
} from "@chakra-ui/react";
import {Bar, Line} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend, BarElement,
} from 'chart.js';
import DowLoadChart from "./DowLoadChart";
import {useDispatch, useSelector} from "react-redux";
import {chartAction, chartPlugins, COLOR_BORDER} from "../../../lib/chartSlice";
import FormCreateChart from "./FormCreateChart";
import {useEffect, useState} from "react";
import {useTranslations} from "next-intl";
import ChartDataLabels from "chartjs-plugin-datalabels";


const BarChartCSRCpn = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        BarElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );
    const t = useTranslations("Chart");
    const dispatch = useDispatch();
    const chartState = useSelector(state => state.chart)
    useEffect(() => {
        dispatch(chartAction.setOneColorBackground())
        dispatch(chartAction.setNameOfChart({value: t.raw("nameOfChart")}))
        dispatch(chartAction.setNameOfValue({value: t.raw("nameOfValue")}))
    }, []);
    return (
        <>
            <Grid
                templateRows={{lg:'repeat(2, 1fr)'}}
                templateColumns={{lg:'repeat(5, 1fr)'}}

            >
                <GridItem rowSpan={2} colSpan={3}>
                    <DowLoadChart/>
                    <Center style={{minHeight:300}}>
                        <Bar id="chart"
                              style={{background: "#ffff",height:"100%"}}
                              options={chartState.options}
                              data={chartState}
                              plugins={[chartPlugins,ChartDataLabels]}

                        />
                    </Center>
                </GridItem>
                <GridItem rowSpan={{lg:2}} colSpan={{lg:2,base:3}}>
                    <FormCreateChart baseBorderColor={true} showOneColor={true}/>
                </GridItem>
            </Grid>


        </>
    );
}
export default BarChartCSRCpn