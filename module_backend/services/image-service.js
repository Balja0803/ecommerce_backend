import cloudinary from "../config/cloudinary-config.js";
import fs from "fs";

export const imageUpload = async (image, folder) => {
  console.log(image.path);
  // const name = JSON.parse(folder);
  const result = await cloudinary.v2.uploader.upload(image.path, {
    folder: folder.name,
    use_filename: true,
  });
  return result.secure_url;
};

export async function uploadToCloudinary(filePath) {
  return cloudinary.v2.uploader
    .upload(filePath, { folder: "products", use_filename: true })
    .then((result) => {
      fs.unlinkSync(filePath);
      return result.secure_url;
    })
    .catch((error) => {
      fs.unlinkSync(filePath);
      return { message: "fail" };
    });
}
