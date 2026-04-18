const mongoose = require("mongoose")
const slug = require("mongoose-slug-updater")

mongoose.plugin(slug)
const productCategorySchema = new mongoose.Schema(
    {
        title: String,
        parent_id: {
            type: String,
            default: ""
        },
        description: String,
        thumbnail: String,
        status: String,
        position: Number,
        slug: {
            type: String,
            slug: "title", // tu dong tao slug tu title

            unique: true
        },
        deleted: {
            type: Boolean,
            default: false
        },
        deletedAt: Date
    }, {
    timestamps: true // tu dong tao ra 2 truong createdAt va updatedAt
}
)

const ProductCategory = mongoose.model("ProductCategory", productCategorySchema, "product-category")

module.exports = ProductCategory;