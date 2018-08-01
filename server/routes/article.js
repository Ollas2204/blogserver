const express           = require('express')
const router            = express.Router()
const { findAll, create, comment, destroy, editArticle } = require('../controllers/controllerArticle')
const middleware = require('../middleware/authLogin');
/* GET home page. */
router.get('/', findAll)
router.post('/', middleware.authLogin, create)
router.put('/:idArticle/comment', middleware.authLogin, comment)
router.put('/edit', editArticle)
router.delete('/:idArticle/delete', middleware.authLogin, destroy)

module.exports = router
