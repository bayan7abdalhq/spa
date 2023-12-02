import { useCart } from "react-use-cart"
import "./Cart.css"
import PaymentForm from "./PaymentForm";
import { useState } from "react";

const Cart=()=>{

    
    const {
    
        isEmpty,
        items,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
    }=useCart();

    const [payment, setPayment]=useState(false);
    const togleSetPayment=()=>{
      setPayment((current)=>!current);
    }
    
    return(
    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="off">
        <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasLabel">shopping Cart</h5>
            <button className="btn btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>

        <div className="offcanvas-body">
       {isEmpty===true &&
            <h4>Cart is Empty</h4>
        }
     
        
            {items.map((product)=>{
                return(
                    <>
                    <div className="hstack gap-2 mb-2" >
                        <div className="mb-1">
                                <img className="img-fluid" id="CartImage" src={product.photo}  alt={product.name}/>
                        </div>
                        <div className="me-auto">
                            <div>
                                {product.name}
                                {product.quantity >1 && (
                                    <div id="qunitityNum" className="text-muted d-inline"> x{product.quantity }</div>
                                    )}
                            </div>
                            <div className="text-muted">
                                {Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format(product.price)}

                            </div>
                        </div> 
                        <div>{Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format(product.price*product.quantity)}</div>
                        
                            <button className="btn mb-1" onClick={()=>updateItemQuantity(product.id, product.quantity+1)}><i className="fas fa-plus"></i></button>
                            <button className="btn" onClick={()=>updateItemQuantity(product.id, product.quantity-1)}><i className="fas fa-minus"></i></button>
                            <button className="btn btn-danger" onClick={()=>removeItem(product.id)}><i className="fas fa-trash"></i></button>
                    </div> 
                </>
                )
            } )}
            {isEmpty!==true &&
            <>
            {(!payment) && <p className=" mb-3 fw-bold fs-5">Cart Total: {Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format(cartTotal)}</p>}
            <button className="btncart mb-2 ms-1" onClick={()=>emptyCart()}>Clear Cart</button>
            <button  className="btncart mb-2 ms-1" onClick={togleSetPayment}>{(payment)? "Close Payment form":" Procced to Pay"}</button>
            <PaymentForm toggleForm={payment}/>
            </>
            }

        </div>
    </div>
    )

}



export default Cart