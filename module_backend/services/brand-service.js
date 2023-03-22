import brand from "../model/brand.js";

export const getBrands = async () => {
  return await brand.find({}).then((res) => {
    return res;
  });
};

export const addBrands = async (brandDetails) => {
  const newBrand = new brand(brandDetails);
  const result = await newBrand.save();

  console.log(result);

  return result;
};
