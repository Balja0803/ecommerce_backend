import cloudinary from "../config/cloudinary-config.js";

export const imageUpload = (images) => {
  console.log(images.path);
  const res = cloudinary.v2.uploader.upload(images.path, {
    folder: "product",
    use_filename: true,
  });
  res
    .then((data) => {
      console.log(data);
      console.log(data.secure_url);
      return data.secure_url;
    })
    .catch((err) => {
      console.log(err);
    });
};
