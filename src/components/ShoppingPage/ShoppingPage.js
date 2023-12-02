import './ShoppingPage.css'
import React, { useState } from "react";
import Products from "./Products";
import { useCart } from 'react-use-cart';
import Cart from './Cart';
import HeaderPage from '../common/HeaderPage';
const ShoppingPage = () => {
  const {totalItems}=useCart();
  const [category, setCategory] = useState("skincare");
  const eventHandler = (event) =>
  {
    setCategory(event.target.id);
  }
  return (
    <>
      <HeaderPage title="SHOPPING PAGE">
      </HeaderPage>
      <div className="justify-content-end d-flex me-4 mt-3">
        <button className="btn btn-outline-primary" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" >
            <i className="fas fa-shopping-cart"></i>
            <div>{totalItems}</div>
        </button>
      </div>
      <Cart/>
      <div className="container" > 
        <div className='row'>
          {/* categories */}
          <div className="col-12 col-md-4 col-lg-3">
            <div className="card border shadow p-3 d-flex w-100 mt-4">
              <div className="card-body">
              <div className="h4 text-center headercategory">CATEGORIES</div> {/*put the header as class based in rule*/ }
                <div className="btn-group-vertical d-flex text-center" role="group" aria-label="Vertical button group" >
                  <button  onClick={eventHandler} className="btn categorybtn p-4 " id="skincare">Skin Care </button>
                  <button  onClick={eventHandler} className="btn categorybtn p-4"  id="makeup"> Make up</button>
                  <button  onClick={eventHandler} className="btn categorybtn p-4"  id="body-products">Body products </button>
                  <button  onClick={eventHandler} className="btn categorybtn p-4"  id="perfumes"> Perfumes </button>
                  <button  onClick={eventHandler} className="btn categorybtn p-4 " id="hair-products"> Hair products </button>
                </div>
              </div>
            </div>
          </div>
          {/* products */}
          <div className="col-12 col-md-8 col-lg-9 col-xl-8 offset-xl-1">
            <div className="row mt-5">
                  <Products categorytype = {category} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default ShoppingPage;

