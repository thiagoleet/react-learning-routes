import {Link} from "react-router-dom";
import { products } from "../data/products";

const ProductsPage = () => {
  const productList = products.map((product) => {
    return <li key={product.id}>
      <Link to={`/products/${product.id}`}>{product.title}</Link></li>;
  });

  return (
    <>
      <h1>The Products Page</h1>
      <ul>{productList}</ul>
    </>
  );
};

export default ProductsPage;
