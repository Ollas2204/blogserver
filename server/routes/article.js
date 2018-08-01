const express           = require('express')
const router            = express.Router()
const controllerArticle = require('../controllers/controllerArticle')
const middleware = require('../middleware/authLogin');
/* GET home page. */
router.get('/', controllerArticle.findAll)
router.post('/', middleware.authLogin, controllerArticle.create)
router.put('/:idArticle/comment', middleware.authLogin, controllerArticle.comment)
router.put('/:idArticle/edit', middleware.authLogin, controllerArticle.editArticle)
router.delete('/:idArticle/delete', middleware.authLogin, controllerArticle.destroy)

module.exports = router
