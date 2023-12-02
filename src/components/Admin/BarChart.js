import { Bar } from "react-chartjs-2";
const BarChart = ({ ChartData }) => {
    return (

        <div className="card mb-4">
            <div className="card-header">
                Bar Chart Example
            </div>
            <div className="card-body">
                <Bar data={ChartData} />
            </div>
        </div>
    )
}
export default BarChart;