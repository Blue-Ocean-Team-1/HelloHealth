import React from 'react';
import useMainContext from '../../context/MainContext.jsx';

export default function ProductViewPage() {
  const { currentProduct } = useMainContext();
  const { id } = currentProduct;
  const productName = currentProduct.product_name;
  const productDescription = currentProduct.product_description;
  const productCost = currentProduct.product_cost;
  const productImage = currentProduct.product_image;
  const productInventory = currentProduct.product_inventory;
  const productRating = currentProduct.product_rating;

  return (
    <>
      <h1>ProductViewPage</h1>
      <h3>{productName}</h3>
      <p>{productDescription}</p>
      <p>{productCost}</p>
      <p>{productImage}</p>
      <p>{productInventory}</p>
      <p>{productRating}</p>
    </>
  );
}
