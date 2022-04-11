const {Router} = require('express');
const {check} = require('express-validator');
const {login, usuarioAuth} = require('../controllers/auth')
const {validarCampos, validarJWT} = require('../middlewares/index')

const router = Router();

router.post('/login',[
	check('correo','El correo es obligatorio').isEmail(),
	check('password','El password es obligatorio').not().isEmpty(),
	validarCampos
],login)

router.get('/login', 
	validarJWT,
	usuarioAuth)

module.exports = router