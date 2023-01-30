const AuthorController = require('../controllers/author.controllers');

module.exports = function(app){
  app.get('/api/allAuthors', AuthorController.findAll)
  app.put('/api/editAuthor/:id', AuthorController.editAuthor)
  app.post('/api/createAuthor', AuthorController.createAuthor)
  app.get('/api/oneAuthor/:id', AuthorController.oneAuthor)
  app.delete('/api/author/delete/:id', AuthorController.deleteAuthor)
}