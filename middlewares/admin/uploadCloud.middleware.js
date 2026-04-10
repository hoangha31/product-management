const streamifier = require("streamifier")
const cloudinary = require("cloudinary").v2

// cau hinh cloudinary
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET // Click 'View API Keys' above to copy your API secret
});

module.exports.uploadCloud = (req, res, next) => {
    if (req.file) {
        let streamUpload = (req) => {
            return new Promise((resolve, reject) => {
                let stream = cloudinary.uploader.upload_stream(
                    (error, result) => {
                        if (result) {
                            resolve(result);
                        } else {
                            reject(error);
                        }
                    }
                );

                streamifier.createReadStream(req.file.buffer).pipe(stream);
            });
        };

        async function upload(req) {
            let result = await streamUpload(req);
            // console.log("req.file.fieldname: ", req.file.fieldname);

            req.body[req.file.fieldname] = result.secure_url;

            // console.log("req.body o router: ", req.body);
            next(); // neu khong them no tri se khong snag duoc buoc tiep theo
        }

        upload(req);
    } else {
        next();
    }
}