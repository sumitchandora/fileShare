import { v2 as cloudinary } from "cloudinary";

const configCloudinary = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUD_NAME,
        api_key: process.env.API_KEY,
        api_secret: process.env.API_SECRET
    })
}

export default configCloudinary;

// CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_secret>@dugz9w6sy