import product from "../model/product.js";

export const getProduct = async () => {
  return await product
    .find({})
    .populate("brand")
    .populate("category")
    .then((res) => {
      return res;
    });
};

export const addProduct = async (productDetails) => {
  const newProduct = new product(productDetails);
  const result = await newProduct.save();

  console.log(result);

  return result;
};

export const filterProducts = async (id) => {
  return await product.find({ category: id });
};
