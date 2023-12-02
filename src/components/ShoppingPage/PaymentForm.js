/* eslint-disable jsx-a11y/anchor-is-valid */
import "./PaymentForm.css"
import { useCart } from "react-use-cart"


const PaymentForm=(props)=>{
  const {cartTotal}=useCart();
  return(
  
  (props.toggleForm)===true &&
      <>
      <div id="paymentForm" className="card text-white rounded-3 ms-2 mb-1">
                <div className="card-body">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="h5 mb-0">Card details</div>
                    </div>
                    <p className="small mb-2">Card type</p>
                        <a><i className="fab fa-cc-mastercard fa-2x me-2"></i></a>
                        <a><i className="fab fa-cc-paypal fa-2x me-2"></i></a>
                        <a><i className="fab fa-cc-visa fa-2x me-2"></i></a>
                    <form id="creditCardForm" className="my-4">
                      <div className="form-outline form-white mb-4">
                        <input  className="form-control" placeholder="Name"/>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input className="form-control" placeholder="Card Number" maxLength={19}/>
                      </div>
                      <div className="form-outline form-white mb-4">
                        <input className="form-control" placeholder="Location" maxLength={19}/>
                      </div>
                      <div className="hstack gap-2 mb-4">
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input className="form-control" placeholder="MM/YYYY"></input>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-outline form-white">
                            <input className="form-control" placeholder="Cvv" maxLength={3}></input>
                          </div>
                        </div>
                      </div>
                    </form>
                    <div className="d-flex justify-content-between">
                      <p className=" mb-3 fw-bold fs-5">Cart Total :</p>
                      <p className=" mb-3 fw-bold fs-5"> {Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format(cartTotal)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" mb-3 fw-bold fs-5">Shipping :</p>
                      <p className=" mb-3 fw-bold fs-5"> {Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format(15)}</p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className=" mb-3 fw-bold fs-5">Total :</p>
                      <p className=" mb-3 fw-bold fs-5"> {Intl.NumberFormat(undefined,{currency:"ILS" ,style:"currency"}).format(cartTotal+15)}</p>
                    </div>
                    <button id="buttonPayment" className="btn-block mb-2 ms-1">Buy</button>

                </div>
            </div>
      </>
            )
}


export default PaymentForm