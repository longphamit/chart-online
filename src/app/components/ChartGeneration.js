'use client'
import {Provider} from "react-redux";
import LineChartCSRCpn from "@/app/components/LineChartCSRCpn";
import {store} from "@/lib/store";
import PieChartCSRCpn from "@/app/components/PieChartCSRCpn";

const ChartGeneration = ({type}) => {
    return (
        <Provider store={store()}>
            {
                type === 'LINE' ? <LineChartCSRCpn/> :
                    type === 'PIE' ? <PieChartCSRCpn/> :
                        <></>
            }
        </Provider>
    )
}
export default ChartGeneration