module.exports.createPost = (req, res, next) => {
    if (!req.body.title) {
        req.flash("error", "Vui long nhap tieu de")
        res.redirect("/admin/products-category/create")
        return;
    }

    next();
}