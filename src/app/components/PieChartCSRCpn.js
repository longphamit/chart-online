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
import DowLoadChart from "@/app/components/DowLoadChart";
import {chartAction, chartPlugins} from "@/lib/chartSlice";
import {useDispatch, useSelector} from "react-redux";
import FormCreateChart from "@/app/components/FormCreateChart";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {useEffect} from "react";

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
    const dispatch = useDispatch();
    const chartState = useSelector(state => state.chart)
    useEffect(() => {
        dispatch(chartAction.setBorderColor())

    }, []);

    return (
        <Grid
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(5, 1fr)'
            gap={4}
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
            <GridItem rowSpan={2} colSpan={2}>
                <FormCreateChart showPickColor={true} showBorder={true}/>
            </GridItem>
        </Grid>

    );
}
export default PieChartCSRCpn