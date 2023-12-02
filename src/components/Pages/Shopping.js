import Navbar from '../common/Navbar';
import Footer from "../common/Footer";
import React from 'react';
import { CartProvider } from 'react-use-cart';
import ShoppingPage from '../ShoppingPage/ShoppingPage';
export default function Shoppping() {
  return (
<>
<Navbar/>

    <CartProvider>
      <ShoppingPage/>
    </CartProvider>
    <Footer/>
    </>
  );
}