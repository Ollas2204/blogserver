const express           = require('express')
const router            = express.Router()
const { findAll, signUp, signIn, deleteAuthor }  = require('../controllers/controllerAuthor')
const middleware = require('../middleware/authLogin');
/* GET home page. */
router.get('/', middleware.authLogin, findAll)
router.post('/signin', signIn)
router.post('/signup', signUp)
router.delete('/:id/delete', middleware.authLogin, deleteAuthor)

module.exports = router
