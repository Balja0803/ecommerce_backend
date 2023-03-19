import product from "../model/product.js";
import fs from "fs";

export const getProduct = async () => {
  return await product.find({}).then((res) => {
    return res;
  });
};

// export const addProduct = async (body, images) => {
//   const newProduct = new product({
//     name: body.name,
//     price: body.price,
//     stock: body.stock,
//     sale: body.sale,
//     specs: body.specs,
//     brand: body.brand,
//     category: body.category,
//     description: body.description,
//     image: {
//       data: fs.readFileSync("./uploads/" + images.filename),
//       contentType: "image/png",
//     },
//   });
//   const result = await newProduct.save();
//   return result;
// };

export const addProduct = async (body, images) => {
  const newImages = images.map((image) => {
    return image.filename;
  });

  const newProduct = new product({
    name: body.name,
    price: body.price,
    stock: body.stock,
    sale: body.sale,
    specs: body.specs,
    brand: body.brand,
    category: body.category,
    description: body.description,
    image: newImages.map((img) => {
      return {
        data: fs.readFileSync("./uploads/" + img),
        contentType: "image/png",
      };
    }),
  });
  const result = await newProduct.save();
  return result;
};
