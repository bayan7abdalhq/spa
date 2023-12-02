import { Link } from "react-router-dom";

const AdminNavbar = () => {
    return (
    <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <Link to ="/" className="navbar-brand ps-3" >SPA Admin Panel</Link>
    </nav>
    )
}
export default AdminNavbar;