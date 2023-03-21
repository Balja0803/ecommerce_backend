import product from "../model/product.js";

export const getProduct = async () => {
  return await product.find({}).then((res) => {
    return res;
  });
};

export const addProduct = async (productReq) => {
  // console.log("product Body", body);
  // console.log("product specs", specs);
  // const obj = JSON.parse(body);
  // const objSpecs = JSON.parse(specs);
  // console.log(obj);
  // console.log(objSpecs);
  // console.log("image path", path);
  // const newProduct = new product({
  //   name: obj.name,
  //   price: obj.price,
  //   stock: obj.stock,
  //   sale: obj.sale,
  //   specs: [...objSpecs],
  //   brand: obj.brand,
  //   category: obj.category,
  //   description: obj.description,
  //   image: path,
  // });

  const newProduct = new product(productReq);

  const result = await newProduct.save();
  console.log(result);
  return result;
};
