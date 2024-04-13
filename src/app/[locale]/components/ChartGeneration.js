'use client'
import {Provider} from "react-redux";
import LineChartCSRCpn from "./LineChartCSRCpn";
import {store} from "../../../lib/store";
import PieChartCSRCpn from "./PieChartCSRCpn";
import BarChartCSRCpn from "./BarChartCSRCpn";

const ChartGeneration = ({type}) => {
    return (
        <Provider store={store()}>
            {
                type === 'LINE' ? <LineChartCSRCpn/> :
                    type === 'PIE' ? <PieChartCSRCpn/> :
                        type === 'BAR' ? <BarChartCSRCpn/> :
                            <></>
            }
        </Provider>
    )
}
export default ChartGeneration