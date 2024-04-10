'use client'
import {Provider} from "react-redux";
import LineChartCSRCpn from "./LineChartCSRCpn";
import {store} from "../../../lib/store";
import PieChartCSRCpn from "./PieChartCSRCpn";

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