const express = require("express")
const router = express.Router()
const controller = require("../../controllers/admin/product-category.controller")
const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")
const validate = require("../../validate/admin/product-category.validate")

const multer = require("multer")
const upload = multer()

router.get('/', controller.index)

router.get('/create', controller.create)

router.post(
    '/create',
    upload.single('thumbnail'),
    uploadCloud.uploadCloud,
    validate.createPost,
    controller.createPost
)

router.get("/detail/:id", controller.detail);

router.get("/edit/:id", controller.edit);
router.patch(
    "/edit/:id",
    upload.single('thumbnail'),
    uploadCloud.uploadCloud,
    validate.createPost,
    controller.editPatch
);

module.exports = router;