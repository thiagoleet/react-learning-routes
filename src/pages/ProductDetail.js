import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetailPage = () => {
  const params = useParams();

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
    </>
  );
};

export default ProductDetailPage;
