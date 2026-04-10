const express = require("express")
const router = express.Router()
const controller = require("../../controllers/admin/product.controller")
const multer = require("multer")
// const storageMulter = require("../../helpers/storageMulter") // cau hinh thu muc luu tru file upload
const upload = multer() // cau hinh thu muc luu tru file upload

const validate = require("../../validate/admin/product.validate")

const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware")


router.get('/', controller.index)
router.patch('/change-status/:status/:id', controller.changeStatus)
router.patch("/change-multi", controller.changeMulti)
router.delete("/delete/:id", controller.deleteItem)
router.get("/create", controller.create); // dung khi an vao nut them moi

router.post(
    "/create",
    upload.single("thumbnail"),
    uploadCloud.uploadCloud,
    validate.createPost,
    controller.createPost
); // dung khi submit form them moi

router.get("/edit/:id", controller.edit);

router.patch(
    "/edit/:id",
    upload.single("thumbnail"),
    validate.createPost,
    controller.editPatch
);

router.get("/detail/:id", controller.detail);


module.exports = router;