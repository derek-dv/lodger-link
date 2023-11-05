import React from "react";
// import { Product } from "./types";

// interface Props {
//   product: Product;
// }

const ProductDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">product.name</h2>
      <p className="text-gray-700 text-lg mb-4">product.description</p>
      <p className="text-gray-700 text-lg mb-4">Price:product.price</p>
      <img
        src="product.imageUrl"
        alt="product.name"
        className="w-full rounded-lg mb-4"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
