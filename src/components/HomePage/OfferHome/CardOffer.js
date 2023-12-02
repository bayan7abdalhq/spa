//import 
import { Link } from 'react-router-dom'
import './CardOffer.css'

//function 
const CardOffer = (props) => { // props For Dynimc Data 
  return (
    <div className="offers">
      <div className="cardoffer">
        <Link to="/ShoppingPage">
          <div className="card-body">
            <img src={props.imag} className="img-fluid" alt={props.offers} />
          </div>
        </Link>
      </div>
    </div>
  )
}

//Export
export default CardOffer