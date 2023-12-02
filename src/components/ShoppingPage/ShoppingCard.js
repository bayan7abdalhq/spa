import './ShoppingCard.css'
import { useCart } from 'react-use-cart';
const ShoppingCard =(props)=>
{
  const {addItem}=useCart()
return(
<div className="card border w-100 card-effect card-hover">
  <img src ={props.imgshoping}  className="card-img-top img-fluid"  alt="product"/>
  <div className="card-body" >
    <p className=" card-text d-flex justify-content-center productcard">  {props.content}  </p>
    <p className='d-flex justify-content-center'> {Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format( props.price)} </p>
   <div className='text-center'> <button className=" btncart" onClick={()=>addItem(props.product)}> Add To Cart </button> </div>
  </div>
</div>
);
}
export default ShoppingCard