import product from "../model/product.js";

export const addProduct = async (props) => {
  const newProduct = new product(props);
  const result = await newProduct.save();
  return result;
};
