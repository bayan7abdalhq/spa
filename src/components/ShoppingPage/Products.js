import ShoppingCard from "./ShoppingCard";
import productsData from "./products_data";

const Products = (props) =>
 {
  // const typee = props.categorytype;
    return (
      <>
        {
          productsData
          .filter
          (
              product => (product.cat === props.categorytype) // product as pointer to the objects in array
          )
          .map(
            (product) =>
          {
              return (
              <div className ="col-12 col-md-6 col-lg-4 col-xl-3">
                <div className = "mb-3">
              <ShoppingCard imgshoping={product.photo} key= {product.id} content={product.name} price ={product.price} product={product} />
              </div>
              </div>
               )
          }
          )
        }
      </>
    )
  }
export default Products;