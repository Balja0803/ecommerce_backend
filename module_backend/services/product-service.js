import Product from "../model/product.js";

export const getProduct = async () => {
  return await Product.find({})
    .populate("brand")
    .populate("category")
    .then((res) => {
      return res;
    });
};

export const addProduct = async (productDetails) => {
  const newProduct = new Product(productDetails);
  const result = await newProduct.save();

  console.log(result);

  return result;
};

export const filterProducts = async (id) => {
  return await Product.find({ category: id });
};

export const productPage = async (query) => {
  const products_per_page = 10;
  let skip = query * (products_per_page - 1);
  const count = await Product.countDocuments({}).exec();
  const pageCount = count / products_per_page;

  const productList = await Product.find({})
    .skip(skip)
    .limit(products_per_page)
    .exec();
  const products = {
    list: productList,
    pages: Math.ceil(pageCount),
  };
  return products;
};
