// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'gallery_id'
});
// Products belongToMany Tags (through ProductTag)
Products.belongToMany(Tag, {
  through: ProductTag
});
// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: ProductTag
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
