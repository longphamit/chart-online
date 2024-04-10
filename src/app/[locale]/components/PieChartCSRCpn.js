'use client'
import {
    Center, Grid,
    GridItem

} from "@chakra-ui/react";
import {Pie} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
} from 'chart.js';
import DowLoadChart from "./DowLoadChart";
import {chartAction, chartPlugins} from "../../../lib/chartSlice";
import {useDispatch, useSelector} from "react-redux";
import FormCreateChart from "./FormCreateChart";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {useEffect} from "react";
import {useTranslations} from "next-intl";

const PieChartCSRCpn = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend,
        ArcElement
    );
    const t = useTranslations("Chart");
    const dispatch = useDispatch();
    const chartState = useSelector(state => state.chart)
    useEffect(() => {
        dispatch(chartAction.setBorderColor())
        dispatch(chartAction.setNameOfChart({value: t.raw("nameOfChart")}))
        dispatch(chartAction.setNameOfValue({value: t.raw("nameOfValue")}))
    }, []);

    return (
        <Grid
            templateRows={{lg:'repeat(2, 1fr)'}}
            templateColumns={{lg:'repeat(5, 1fr)'}}
        >
            <GridItem rowSpan={2} colSpan={3}>
                <DowLoadChart/>
                <Center>
                    <Pie id="chart"
                         style={{background: "#ffff"}}
                         options={chartState.options}
                         data={chartState}
                         plugins={[chartPlugins,ChartDataLabels]}

                    />
                </Center>
            </GridItem>
            <GridItem rowSpan={{lg:2}} colSpan={{lg:2,base:3}}>
                <FormCreateChart showPickColor={true} showBorder={true}/>
            </GridItem>
        </Grid>

    );
}
export default PieChartCSRCpn