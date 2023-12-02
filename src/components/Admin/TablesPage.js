import "./Admin.css"
import AdminDataTable from "./AdminDataTable";
import AdminNavbar from "./AdminNavbar"
import AdminSideNavbar from "./AdminSideNavbar"

const TablesPage = () => {
    return (
        <div className="sb-nav-fixed">
            <AdminNavbar></AdminNavbar>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <AdminSideNavbar></AdminSideNavbar>
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Data Base</h1>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table me-1" />
                                    October reservations
                                </div>
                                <AdminDataTable/>
                            </div>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <i className="fas fa-table me-1" />
                                    November reservations
                                </div>
                                <AdminDataTable/>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>

    );
}



export default TablesPage;