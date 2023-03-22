import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: "dbvkcaxsh",
  api_key: "361117552839263",
  api_secret: "WIKUweeY29bD-1VL7aYBW7H06ng",
});

// const uploads = (file, folder) => {
//   return new Promise((resolve) => {
//     cloudinary.v2.uploader.upload(
//       file,
//       (result) => {
//         resolve({
//           url: result.secure_url,
//           id: result.public_id,
//         });
//       },
//       {
//         resource_type: "auto",
//         folder: folder,
//       }
//     );
//   });
// };

export default cloudinary;
// export default uploads;
