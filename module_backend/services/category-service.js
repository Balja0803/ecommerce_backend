import category from "../model/category.js";

export const getCategories = async () => {
  return await category.find({}).then((res) => {
    return res;
  });
};

export const addCategory = async (categoryDetails) => {
  const newCategory = new category(categoryDetails);
  const result = await newCategory.save();
  console.log(result);

  return result;
};
