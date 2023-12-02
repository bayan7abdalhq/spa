import { useState } from "react";
import ChartData from "./ChartData";
import "./Admin.css"
import AdminNavbar from "./AdminNavbar"
import AdminSideNavbar from "./AdminSideNavbar"
import LineChart from "./LineChart"
import BarChart from "./BarChart"
import PieChart from "./PieChart"
const ChartsPage = () => {
    const [userData] = useState({
        labels: ChartData.map((data) => data.service),
        datasets: [{
            label: "Service booked times",
            data: ChartData.map((data) => data.number)
        }],

    });
    return (
        <>
            <div className="sb-nav-fixed">
                <AdminNavbar></AdminNavbar>
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <AdminSideNavbar></AdminSideNavbar>
                    </div>
                    <div id="layoutSidenav_content">
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Last Month Statistics</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div className="row">
                                <div className="col-xl-6">
                                    <LineChart ChartData={userData} />
                                </div>
                                <div className="col-xl-6">
                                    <BarChart ChartData={userData} />
                                </div>
                                <div className="col-xl-6">
                                    <BarChart ChartData={userData} />
                                </div>
                                <div className="col-xl-6">
                                    <PieChart ChartData={userData} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ChartsPage;