import { Link } from "react-router-dom";

const AdminSideNavbar = () => {

  return (

    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <Link to ="/" className="nav-link">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt" /></div>
            Home Page
          </Link>
          <Link to ="/ChartsPage" className="nav-link" >
            <div className="sb-nav-link-icon"><i className="fas fa-chart-area" /></div>
            Charts and Stats
          </Link>
          <Link to ="/DataBasePage" className="nav-link">
            <div className="sb-nav-link-icon"><i className="fas fa-table" /></div>
            Data Base
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Admin
      </div>
    </nav>
  );
}

export default AdminSideNavbar;