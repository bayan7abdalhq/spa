import { Pie } from "react-chartjs-2";
const PieChart = ({ChartData}) => {

    return (

        <div className="card mb-4">
            <div className="card-header">
                Pie Chart Example
            </div>
            <div className="card-body">
            <Pie data={ChartData}/>
            </div>
        </div>
    )
}
export default PieChart;