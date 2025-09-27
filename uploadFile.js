import { v2 as cloudinary } from "cloudinary";
import { Readable } from 'stream';

const uploadStream = async (buffer, filename) => {
    return new Promise((resolve, reject) => {
        const upload = cloudinary.uploader.upload_stream({
            resource_type: 'auto',
            public_id: filename
        }, (error, result) => {
            if(error) return reject(error);
            resolve(result.secure_url);
        });
        Readable.from(buffer).pipe(upload);
    })
}
export default uploadStream;