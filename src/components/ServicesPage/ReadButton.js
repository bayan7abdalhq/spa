import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ReadButton = (props) => {
    return (
        <>
             <Link to={props.link} className="btnser btn m-2 fs-6">Read More </Link>
        </>
    )
}

export default ReadButton ;  
