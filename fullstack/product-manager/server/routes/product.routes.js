const ProductController = require('../controllers/product.controller');

module.exports = function(app){
  app.get('/api/oneProduct/:id', ProductController.oneProduct)
  app.post('/api/product', ProductController.createProduct)
}