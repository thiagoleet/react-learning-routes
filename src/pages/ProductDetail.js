import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetailPage = () => {
  const params = useParams();
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("products");
  }

  return (
    <>
      <h1>Product Details!</h1>
      <p>{params.productId}</p>
      <p>
        <button onClick={navigateHandler}>Back to products</button>
      </p>
    </>
  );
};

export default ProductDetailPage;
