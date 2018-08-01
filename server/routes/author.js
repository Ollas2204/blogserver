const express           = require('express')
const router            = express.Router()
const controllerAuthor  = require('../controllers/controllerAuthor')
const middleware = require('../middleware/authLogin');
/* GET home page. */
router.get('/', middleware.authLogin, controllerAuthor.findAll)
router.post('/signin', controllerAuthor.signIn)
router.post('/signup', controllerAuthor.signUp)
router.delete('/:id/delete', middleware.authLogin, controllerAuthor.deleteAuthor)

module.exports = router
