import cloudinary from "../config/cloudinary-config.js";

export const imageUpload = async (images) => {
  console.log(images.path);
  const result = await cloudinary.v2.uploader.upload(images.path, {
    folder: "product",
    use_filename: true,
  });
  return result.secure_url;
};
